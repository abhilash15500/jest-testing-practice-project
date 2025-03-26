import { calculator } from "../src/calculator.js";

// for addition

test("Return a typeError when user enters invalid numbers", () => {
  expect(() => calculator.add(10, "a")).toThrow("Please enter a valid number");
  expect(() => calculator.add("a", 10)).toThrow("Please enter a valid number");
});

test("Add two positive numbers", () => {
  expect(calculator.add(10, 5)).toEqual(15);
});

test("Add one positive number and one negative number", () => {
  expect(calculator.add(-5, 10)).toEqual(5);
});

test("Add two negative numbers", () => {
  expect(calculator.add(-10, -5)).toEqual(-15);
});

// for subtraction
test("Return a typeError when user enters invalid numbers", () => {
  expect(() => calculator.sub(10, "a")).toThrow("Please enter a valid number");
  expect(() => calculator.sub("a", 10)).toThrow("Please enter a valid number");
});

test("Subtract two positive numbers", () => {
  expect(calculator.sub(10, 5)).toEqual(5);
});

test("Subtract  two negative numbers", () => {
  expect(calculator.sub(-10, -5)).toEqual(-5);
});

test("Subtract one positive number from one negative number", () => {
  expect(calculator.sub(-5, 10)).toEqual(-15);
});

test("Subtract one negative number from one positive number", () => {
  expect(calculator.sub(10, -5)).toEqual(15);
});

// for multiplication
test("Return a typeError when user enters invalid numbers", () => {
  expect(() => calculator.mul(10, "a")).toThrow("Please enter a valid number");
  expect(() => calculator.mul("a", 10)).toThrow("Please enter a valid number");
});

test("Multiply two positive numbers", () => {
  expect(calculator.mul(5, 10)).toEqual(50);
});

test("Multiply one positive number with one negative number", () => {
  expect(calculator.mul(-5, 10)).toEqual(-50);
});

test("Multiply two negative numbers", () => {
  expect(calculator.mul(-5, -10)).toEqual(50);
});

// for division
test("Return a typeError when user enters invalid numbers", () => {
  expect(() => calculator.div(10, "a")).toThrow("Please enter a valid number");
  expect(() => calculator.div("a", 10)).toThrow("Please enter a valid number");
});

test("Divide a positive number by a positive number", () => {
  expect(calculator.div(50, 10)).toEqual(5);
});

test("Divide a negative number by a positive number", () => {
  expect(calculator.div(-50, 10)).toEqual(-5);
});

test("Divide a positive number by a negative number", () => {
  expect(calculator.div(50, -10)).toEqual(-5);
});

test("Divide 0 by a number", () => {
  expect(calculator.div(0, 50)).toEqual(0);
});

test("Divide a number by zero", () => {
  expect(calculator.div(-50, 0)).toEqual(-Infinity);
  expect(calculator.div(50, 0)).toEqual(Infinity);
});
