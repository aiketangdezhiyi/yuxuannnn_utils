export interface EventFunction extends Function {
  __once__: boolean;
}

/**
 * 发布订阅模式 : 事件总线
 */
export class EventBus {
  _eventMap = new Map<string, Set<EventFunction>>();

  /**
   * 监听事件
   */
  $on(eventType: string, handle: EventFunction) {
    const _eventSet = this._eventMap.get(eventType);
    if (_eventSet) {
      _eventSet.add(handle);
    } else {
      const newEventSet = new Set<EventFunction>();
      newEventSet.add(handle);
      this._eventMap.set(eventType, newEventSet);
    }
  }

  $emit(eventType: string, ...args: any[]) {
    const _eventSet = this._eventMap.get(eventType);
    if (_eventSet) {
      for (const event of _eventSet) {
        event.apply(this, args);
        if (event.__once__) {
          _eventSet.delete(event);
        }
      }
    }
  }

  $once(eventType: string, handle: EventFunction) {
    handle.__once__ = true; // 事件仅触发一次
    this.$on(eventType, handle);
  }

  $off(eventType: string, handle: EventFunction) {
    const _eventSet = this._eventMap.get(eventType);
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

// ================================

// 吸收react合成事件的精华，解决原生事件因为闭包要不断进行事件的注册和卸载

export class DOMEventBus {
  eventMap = new Map<string, Set<Function>>();

  /**
   *
   * @param dom
   * @param onEventType 注册的原生事件
   * @param eventType 内部事件队列对应的key
   */
  addEventListener(dom: any, onEventType: string, eventType: string) {
    let that = this;
    dom.addEventListener(onEventType, function (this: unknown, e: any) {
      const eventSet = that.eventMap.get(eventType);
      if (eventSet) {
        for (const event of eventSet) {
          event.call(this, e);
        }
      }
    });
  }

  addEvent(eventType: string, handler: Function) {
    let eventSet = this.eventMap.get(eventType);
    if (eventSet) {
      eventSet.add(handler);
    } else {
      eventSet = new Set<Function>();
      eventSet.add(handler);
      this.eventMap.set(eventType, eventSet);
    }
  }

  removeEvent(eventType: string, handler: Function) {
    // 同一类型的事件只需要注册一次就可以，利用事件队列添加和移除模拟事件的注册和销毁
    const eventSet = this.eventMap.get(eventType);
    if (eventSet) {
      eventSet.delete(handler);
    }
  }
}
