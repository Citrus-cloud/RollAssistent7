/**
 * NPC Storage — localStorage CRUD for NPCs/Enemies.
 * Mirrors the pattern used by storage.js for characters.
 */
import { NPC_STORAGE_KEY } from '../utils/constants.js';

/**
 * Get all saved NPCs from localStorage
 * @returns {Array} Array of NPC objects
 */
export function getSavedNpcs() {
  try {
    const raw = localStorage.getItem(NPC_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      localStorage.removeItem(NPC_STORAGE_KEY);
      return [];
    }
    return parsed.filter(npc => npc && typeof npc === 'object' && npc.id);
  } catch (e) {
    localStorage.removeItem(NPC_STORAGE_KEY);
    return [];
  }
}

/**
 * Save the full NPC list to localStorage
 * @param {Array} list - Array of NPC objects
 * @returns {boolean} Success status
 */
export function saveNpcList(list) {
  try {
    if (!Array.isArray(list)) return false;
    localStorage.setItem(NPC_STORAGE_KEY, JSON.stringify(list));
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Add a single NPC to storage
 * @param {Object} npc - NPC object with id
 * @returns {boolean} Success status
 */
export function addNpc(npc) {
  if (!npc || !npc.id) return false;
  const npcs = getSavedNpcs();
  npcs.push(npc);
  return saveNpcList(npcs);
}

/**
 * Update an existing NPC in storage by id
 * @param {Object} updatedNpc - NPC object with id
 * @returns {boolean} Success status
 */
export function updateNpc(updatedNpc) {
  if (!updatedNpc || !updatedNpc.id) return false;
  const npcs = getSavedNpcs();
  const idx = npcs.findIndex(n => n.id === updatedNpc.id);
  if (idx < 0) return false;
  npcs[idx] = updatedNpc;
  return saveNpcList(npcs);
}

/**
 * Delete an NPC from storage by id
 * @param {string} npcId - The NPC id to delete
 * @returns {boolean} Success status
 */
export function deleteNpc(npcId) {
  if (!npcId) return false;
  const npcs = getSavedNpcs();
  const filtered = npcs.filter(n => n.id !== npcId);
  return saveNpcList(filtered);
}

/**
 * Get a single NPC by id
 * @param {string} npcId - The NPC id
 * @returns {Object|null} The NPC object or null
 */
export function getNpcById(npcId) {
  if (!npcId) return null;
  const npcs = getSavedNpcs();
  return npcs.find(n => n.id === npcId) || null;
}
