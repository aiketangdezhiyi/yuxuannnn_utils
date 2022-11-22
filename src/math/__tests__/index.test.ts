import { sum, boundary } from '..';
test('sum求和单元测试', () => {
  expect(sum(1, 2, 3, 4, 5)).toBe(15);
});

test('boundary单元测试', () => {
  expect(boundary(1, 2, 3)).toBe(2);
});
