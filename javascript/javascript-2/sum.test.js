const sum = require('./sum');

test('sum(1)(2)(3) = 6', () => {
	expect(sum(1)(2)(3)*1).toBe(6);
});

test('sum()(2)(3) = 5', () => {
  expect(sum()(2)(3)*1).toBe(5);
});

test('sum(1)(2)() = 3', () => {
  expect(sum(1)(2)()*1).toBe(3);
});

test('sum(1)()(3) = 4', () => {
  expect(sum(1)()(3)*1).toBe(4);
});

test('sum(1)(2)(3)(-5) = 1', () => {
  expect(sum(1)(2)(3)(-5)*1).toBe(1);
});

test('sum() = 0', () => {
  expect(sum()*1).toBe(0);
});

test('sum()() = 0 ', () => {
  expect(sum()()*1).toBe(0);
});

const sum2 = require('./sum');

test('sum2(1)(2)(3) = 6', () => {
  expect(sum2(1)(2)(3)*1).toBe(6);
});

test('sum2()(2)(3) = 5', () => {
  expect(sum2()(2)(3)*1).toBe(5);
});

test('sum2(1)(2)() = 3', () => {
  expect(sum2(1)(2)()*1).toBe(3);
});

test('sum2(1)()(3) = 4', () => {
  expect(sum2(1)()(3)*1).toBe(4);
});

test('sum2(1)(2)(3)(-5) = 1', () => {
  expect(sum2(1)(2)(3)(-5)*1).toBe(1);
});

test('sum2() = 0', () => {
  expect(sum2()*1).toBe(0);
});

test('sum2()() = 0', () => {
  expect(sum2()()*1).toBe(0);
});