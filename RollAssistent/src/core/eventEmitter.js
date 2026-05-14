/**
 * EventEmitter — простая реализация паттерна «наблюдатель».
 * Используется стором для уведомления подписчиков об изменениях.
 */
export class EventEmitter {
  constructor() {
    this._listeners = new Map();
  }

  on(event, fn) {
    if (!this._listeners.has(event)) {
      this._listeners.set(event, new Set());
    }
    this._listeners.get(event).add(fn);
    return () => this.off(event, fn);
  }

  off(event, fn) {
    const set = this._listeners.get(event);
    if (set) set.delete(fn);
  }

  emit(event, data) {
    const set = this._listeners.get(event);
    if (set) {
      for (const fn of set) {
        try { fn(data); } catch (e) { console.error(`EventEmitter error [${event}]:`, e); }
      }
    }
    // Also emit wildcard '*'
    const wildcard = this._listeners.get('*');
    if (wildcard) {
      for (const fn of wildcard) {
        try { fn(event, data); } catch (e) { console.error('EventEmitter wildcard error:', e); }
      }
    }
  }

  removeAllListeners(event) {
    if (event) {
      this._listeners.delete(event);
    } else {
      this._listeners.clear();
    }
  }
}
