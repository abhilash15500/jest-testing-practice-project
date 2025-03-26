import { capitalize } from "../src/capitalize.js";

test("Capitalizes the first letter for a single letter  lower case string", () => {
  expect(capitalize("h")).toBe("H");
});

test("Capitalizes the first letter for a single letter upper case string", () => {
  expect(capitalize("H")).toBe("H");
});

test("Capitalizes the first letter for a multi letters upper case string", () => {
  expect(capitalize("HEY")).toBe("HEY");
});

test("Capitalizes the first letter for a multi letters lower case string", () => {
  expect(capitalize("hey")).toBe("Hey");
});

test("Returns empty string if empty string is passed", () => {
  expect(capitalize("")).toBe("");
});

test("Throws an error if the string has a number as first character", () => {
  expect(() => capitalize("1abc")).toThrow(
    "Please dont enter a number as first character",
  );
});
