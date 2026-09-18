// Client-side IndexedDB persistence for user-uploaded award photos
const DB_NAME = 'pooja_awards_db';
const STORE_NAME = 'award_photos';
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'filename' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveAwardPhoto(filename: string, file: File): Promise<string> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      store.put({ filename, dataUrl, lastModified: Date.now() });
      tx.oncomplete = () => resolve(dataUrl);
      tx.onerror = () => reject(tx.error);
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export async function getAllAwardPhotos(): Promise<Record<string, string>> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const request = store.getAll();
      request.onsuccess = () => {
        const result: Record<string, string> = {};
        for (const item of request.result || []) {
          result[item.filename] = item.dataUrl;
        }
        resolve(result);
      };
      request.onerror = () => resolve({});
    });
  } catch {
    return {};
  }
}

export async function clearAllAwardPhotos(): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.clear();
  } catch (err) {
    console.error('Failed to clear photos', err);
  }
}

// LocalStorage helpers for blank/custom photo captions
const CAPTION_STORAGE_KEY = 'pooja_awards_captions_v1';

export function getCustomCaptions(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(CAPTION_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    const cleaned: Record<string, string> = {};
    for (const [key, val] of Object.entries(parsed)) {
      if (typeof val === 'string' && val.trim() !== '') {
        cleaned[key] = val;
      }
    }
    return cleaned;
  } catch {
    return {};
  }
}

export function saveCustomCaption(id: string, caption: string): void {
  if (typeof window === 'undefined') return;
  try {
    const current = getCustomCaptions();
    current[id] = caption;
    localStorage.setItem(CAPTION_STORAGE_KEY, JSON.stringify(current));
  } catch (err) {
    console.error('Failed to save caption', err);
  }
}

// Founder Portrait Photo Persistence (28.jpeg)
const FOUNDER_PHOTO_KEY = 'pooja_founder_avatar_v1';
export const DEFAULT_FOUNDER_PHOTO_FILENAME = '28.jpeg';

export async function getFounderPhoto(): Promise<string | null> {
  // 1. Check localStorage first (fast)
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(FOUNDER_PHOTO_KEY);
      if (stored) return stored;
    } catch {
      // ignore
    }
  }

  // 2. Check IndexedDB
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const request = store.get(DEFAULT_FOUNDER_PHOTO_FILENAME);
      request.onsuccess = () => {
        if (request.result && request.result.dataUrl) {
          resolve(request.result.dataUrl);
        } else {
          resolve(null);
        }
      };
      request.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

export async function saveFounderPhoto(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async () => {
      const dataUrl = reader.result as string;
      // Save in localStorage
      try {
        localStorage.setItem(FOUNDER_PHOTO_KEY, dataUrl);
      } catch {
        // May exceed quota if huge image, ignore
      }

      // Save in IndexedDB (robust for high-res images)
      try {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        store.put({
          filename: DEFAULT_FOUNDER_PHOTO_FILENAME,
          dataUrl,
          lastModified: Date.now()
        });
        tx.oncomplete = () => resolve(dataUrl);
        tx.onerror = () => resolve(dataUrl);
      } catch {
        resolve(dataUrl);
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export async function clearFounderPhoto(): Promise<void> {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(FOUNDER_PHOTO_KEY);
    } catch {
      // ignore
    }
  }
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.delete(DEFAULT_FOUNDER_PHOTO_FILENAME);
  } catch {
    // ignore
  }
}

