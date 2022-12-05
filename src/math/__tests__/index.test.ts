import { sum, boundary, findMaxInArray, findMinInArray } from '..';
// test('sum求和单元测试', () => {
//   expect(sum(1, 2, 3, 4, 5)).toBe(15);
// });

// test('boundary单元测试', () => {
//   expect(boundary(1, 2, 3)).toBe(2);
// });

test('findMaxInArray测试', () => {
  expect(findMaxInArray([1, 2, 3])).toBe(3);
});

test('findMinInArray测试', () => {
  expect(findMinInArray([1, 2, 3])).toBe(1);
});
