import { reverseString } from "../src/reverseString.js";

test("Reverses the string with multiple letters", () => {
  expect(reverseString("hey")).toBe("yeh");
});

test("Reverses the string with single letter", () => {
  expect(reverseString("h")).toBe("h");
});

test("Returns empty string when empty string is passed", () => {
  expect(reverseString("")).toBe("");
});

test("Reversed the string when numbers are present in the string", () => {
  expect(reverseString("imnew10fr")).toBe("rf01wenmi");
});
