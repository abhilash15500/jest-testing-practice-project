const calculator = {
  add: function (num1, num2) {
    if (isNaN(num1) === true || isNaN(num2) === true) {
      throw new TypeError("Please enter a valid number");
    }
    return num1 + num2;
  },
  sub: function (num1, num2) {
    if (isNaN(num1) === true || isNaN(num2) === true) {
      throw new TypeError("Please enter a valid number");
    }
    return num1 - num2;
  },
  mul: function (num1, num2) {
    if (isNaN(num1) === true || isNaN(num2) === true) {
      throw new TypeError("Please enter a valid number");
    }
    return num1 * num2;
  },
  div: function (num1, num2) {
    if (isNaN(num1) === true || isNaN(num2) === true) {
      throw new TypeError("Please enter a valid number");
    }
    return num1 / num2;
  },
};

export { calculator };
