export function type(target: any) {
  if (target === null) {
    return 'null';
  }
  const ObToStr = Object.prototype.toString;
  const compareObj = {
    '[object Number]': 'object number',
    '[object String]': 'object string',
    '[object Array]': 'object array',
    '[object Object]': 'object object',
    '[object Boolean]': 'object boolean',
  };
  let compareStr = '';
  let prop = '';
  if (typeof target === 'object') {
    // array object new Number Boolean String
    compareStr = ObToStr.call(target);
    for (prop in compareObj) {
      if (compareStr === prop) {
        return (compareObj as any)[prop];
      }
    }
  } else {
    return typeof target; // function undefined number boolean string
  }
}
