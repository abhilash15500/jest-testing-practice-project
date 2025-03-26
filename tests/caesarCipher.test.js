import { caesarCipher } from "../src/caesarCipher.js";

test("Returns a string with shift factor of 2" , ()=> {
    expect(caesarCipher("abc",2)).toBe("cde");
})


test("Returns a string with shift factor of 2 where shift factors goes in cyylce this is z shift factor 2 is ahead of z end of alphabets", () => {
    expect(caesarCipher("xyz",2)).toBe("zab");
})

test("If a string has numbers or any other characters , then the shift should only works for letters" , ()=> {
    expect(caesarCipher("hi im new @#12", 2)).toBe("jk ko pgy @#12");
})

test("Returns a string with  upper case letter replaced by upper case letter only" ,()=> {
    expect(caesarCipher("aBc",2)).toBe("cDe");
})

test("Returns a string with shift factor of 5", () => {
    expect(caesarCipher("hello", 5)).toBe("mjqqt");
});

test("Returns a string with shift factor of 26 (full alphabet cycle)", () => {
    expect(caesarCipher("hello", 26)).toBe("hello");
});

test("Returns an empty string when input is empty", () => {
    expect(caesarCipher("", 5)).toBe("");
});