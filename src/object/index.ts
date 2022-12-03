export interface KeyStringObject {
  [key: string]: any;
}

/**
 * 判断是对象还是数组
 * @param obj
 * @returns
 */
export const getObjOrArrayType = (obj: any) => {
  if (typeof obj !== 'object') {
    return undefined;
  }
  const type = Object.prototype.toString.call(obj);
  if (type === '[object Object]') {
    return 'object';
  } else if (type === '[object Array]') {
    return 'array';
  }
  return undefined;
};

const deepCloneArr = (arr: any[]): any[] => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'object') {
      result[i] = arr[i];
    } else {
      result[i] = deepClone(arr[i]);
    }
  }
  return result;
};

const deepCloneObj = (obj: KeyStringObject) => {
  const result: KeyStringObject = {};
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      if (typeof obj[prop] !== 'object') {
        result[prop] = obj[prop];
      } else {
        result[prop] = deepClone(obj[prop]);
      }
    }
  }
  return result;
};

/**
 * 深克隆对象
 * @param obj
 * @returns
 */
export const deepClone = (obj: any) => {
  if (typeof obj !== 'object') {
    return obj;
  }
  if (getObjOrArrayType(obj) === 'object') {
    return deepCloneObj(obj);
  }
  if (getObjOrArrayType(obj) === 'array') {
    return deepCloneArr(obj);
  }
};
