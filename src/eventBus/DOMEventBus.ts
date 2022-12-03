export class DOMEventBus {
  #eventMap = new Map<string, Set<Function>>();

  /**
   *
   * @param dom
   * @param originEventType 注册的原生事件
   * @param eventType 内部事件队列对应的key
   */
  addEventListener(dom: any, originEventType: string, eventType: string) {
    const that = this;
    dom.addEventListener(originEventType, function (this: unknown, e: any) {
      const eventSet = that.#eventMap.get(eventType);
      if (!eventSet) return;
      for (const event of eventSet) {
        event.call(this, e);
      }
    });
  }

  addEvent(eventType: string, handler: Function) {
    let eventSet = this.#eventMap.get(eventType);
    if (eventSet) {
      eventSet.add(handler);
    } else {
      eventSet = new Set<Function>();
      eventSet.add(handler);
      this.#eventMap.set(eventType, eventSet);
    }
  }

  removeEvent(eventType: string, handler: Function) {
    // 同一类型的事件只需要注册一次就可以，利用事件队列添加和移除模拟事件的注册和销毁
    const eventSet = this.#eventMap.get(eventType);
    if (!eventSet) return;
    eventSet.delete(handler);
  }
}
