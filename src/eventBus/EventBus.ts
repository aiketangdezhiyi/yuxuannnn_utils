/**
 * 发布订阅模式 : 事件总线
 */
export class EventBus {
  #eventMap = new Map<string, Set<Function>>();

  /**
   * 监听事件
   */
  $on(eventType: string, handle: Function) {
    const _eventSet = this.#eventMap.get(eventType);
    if (_eventSet) {
      _eventSet.add(handle);
    } else {
      const newEventSet = new Set<Function>();
      newEventSet.add(handle);
      this.#eventMap.set(eventType, newEventSet);
    }
  }

  $emit(eventType: string, ...args: any[]) {
    const _eventSet = this.#eventMap.get(eventType);
    if (_eventSet) {
      for (const event of _eventSet) {
        event.apply(this, args);
        if ((event as any).__once__) {
          _eventSet.delete(event);
        }
      }
    }
  }

  $once(eventType: string, handle: Function) {
    (handle as any).__once__ = true; // 事件仅触发一次
    this.$on(eventType, handle);
  }

  $off(eventType: string, handle: Function) {
    const _eventSet = this.#eventMap.get(eventType);
    if (!_eventSet) {
      return;
    }
    if (!handle) {
      // 销毁eventType的所有事件
      _eventSet.clear();
    } else {
      _eventSet.delete(handle);
    }
  }
}
