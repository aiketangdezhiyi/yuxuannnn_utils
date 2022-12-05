/**
 * 加和
 */
export function sum(...args: number[]) {
  return args.reduce((prev, cur) => prev + cur);
}

/** 限制最小值 */
export const boundaryMin = (value: number, min: number) => {
  return value >= min ? value : min;
};

/** 限制最大值 */
export const boundaryMax = (value: number, max: number) => {
  return value <= max ? value : max;
};

/**
 * 给定一个值和能取到的最大值以及最小值，返回边界内的数据，能取到边界值
 * @param value
 * @param min
 * @param max
 */
export const boundary = (value: number, min: number, max: number) => {
  value = boundaryMin(value, min);
  return boundaryMax(value, max);
};

/**
 * 生成一个随机整数，包括min不包括max
 * @param min
 * @param max
 * @returns
 */
export const getRandomNumber = (min: number, max: number) => {
  // Math.random() [0,1)
  return Math.floor(Math.random() * (max - min) + min);
};

/**
 * 生成一个随机的字符串
 * @param len
 * @returns
 */
export const getRandomString = (len: number) => {
  return Math.random().toString(16).substring(2).substring(0, len);
};

export const findMaxInArray = (
  array: any[],
  compare?: (curMax: any, curVal: any) => any,
) => {
  compare = compare || findMaxInArray.compare;
  if (array.length === 0) return;
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    max = compare(max, array[i]);
  }
  return max;
};

findMaxInArray.compare = function (a: any, b: any) {
  return Math.max(a, b);
};

export const findMinInArray = (
  array: any[],
  compare?: (curMin: any, curVal: any) => any,
) => {
  compare = compare || findMinInArray.compare;
  if (array.length === 0) return;
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    min = compare(min, array[i]);
  }
  return min;
};
findMinInArray.compare = function (a: any, b: any) {
  return Math.min(a, b);
};
