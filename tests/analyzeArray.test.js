import { analyzeArray } from "../src/analyzeArray.js";

test("The function should accept array of numbers only (not even empty array)", () => {
  expect(() => analyzeArray([3, 5, 1, "hi", "lol"])).toThrow(
    "Please enter numbers only",
  );
  expect(() => analyzeArray([])).toThrow("Please enter numbers only");
});

test("The function should return the correct average", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toEqual(4.0);
});

test("The function should return the correct min value", () => {
  expect(analyzeArray([2, 6, 77, 1, 5]).min).toEqual(1);
});

test("The function should return the correct max value", () => {
  expect(analyzeArray([2, 6, 77.5, 1, 5]).max).toEqual(77.5);
});

test("The function should return the correct length of array", () => {
  expect(analyzeArray([2, 6, 77, 1, 5]).length).toEqual(5);
});

test("The function should handle mixed positive and negative numbers for average", () => {
  expect(analyzeArray([-1, 8, -3, 4, -2, 6]).average).toEqual(2);
});

test("The function should handle mixed positive and negative numbers for min and max", () => {
  expect(analyzeArray([-2, 6, -77, 1, 5]).min).toEqual(-77);
  expect(analyzeArray([-2, 6, -77, 1, 5]).max).toEqual(6);
});
