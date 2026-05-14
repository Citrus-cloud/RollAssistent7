/**
 * Хранилище персонажей — localStorage CRUD
 */
import { STORAGE_KEY } from './constants.js';

export function getSavedCharacters() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      localStorage.removeItem(STORAGE_KEY);
      return [];
    }
    return parsed.filter(char => char && typeof char === 'object' && char.id);
  } catch (e) {
    localStorage.removeItem(STORAGE_KEY);
    return [];
  }
}

export function saveCharacterList(list) {
  try {
    if (!Array.isArray(list)) return false;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    return true;
  } catch (e) {
    return false;
  }
}
