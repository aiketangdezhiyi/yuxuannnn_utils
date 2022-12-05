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
