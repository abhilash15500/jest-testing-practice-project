function reverseString(string) {

  let arrayOfString = string.split("").reverse();
  let resultString = "";
  arrayOfString.forEach((letter) => {
    resultString = resultString + letter;
  });

  return resultString;
}

export { reverseString };
