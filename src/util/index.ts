/**
 * 延迟函数一般用于本地开发时模拟服务器延迟
 */
export function delay(delayTime = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, delayTime);
  });
}

/**
 * 防抖
 * @param func 执行函数
 * @param delay 延迟时间
 * @returns
 */
export const debounce = (func: Function, delay: number = 3000) => {
  let timer: any = void 0;
  return function (this: unknown, ...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

/**
 *
 * @param func
 * @param duration 两次函数执行的时间间隔
 */
export const throttle = (func: Function, duration: number) => {
  let lastTime = 0;
  return function (this: unknown, ...args: any[]) {
    const nowTime = Date.now();
    if (nowTime - lastTime >= duration) {
      func.apply(this, args);
      lastTime = nowTime;
    }
  };
};
