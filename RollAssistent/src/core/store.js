/**
 * Store — иммутабельный стор с подписками на изменения.
 * Обёртка над внутренним состоянием с уведомлениями через EventEmitter.
 */
import { EventEmitter } from './eventEmitter.js';

export class Store {
  constructor(initialState = {}) {
    this._state = { ...initialState };
    this._emitter = new EventEmitter();
  }

  getState() {
    return { ...this._state };
  }

  get(key) {
    const val = this._state[key];
    if (Array.isArray(val)) return [...val];
    if (val && typeof val === 'object') return { ...val };
    return val;
  }

  set(key, value, silent = false) {
    this._state[key] = value;
    if (!silent) {
      this._emitter.emit(key, value);
      this._emitter.emit('change', { key, value });
    }
  }

  update(partial, silent = false) {
    for (const [key, value] of Object.entries(partial)) {
      this._state[key] = value;
    }
    if (!silent) {
      for (const key of Object.keys(partial)) {
        this._emitter.emit(key, this._state[key]);
      }
      this._emitter.emit('change', partial);
    }
  }

  subscribe(eventOrFn, fn) {
    if (typeof eventOrFn === 'function') {
      // Subscribe to all changes
      return this._emitter.on('change', eventOrFn);
    }
    return this._emitter.on(eventOrFn, fn);
  }

  emit(event, data) {
    this._emitter.emit(event, data);
  }
}
