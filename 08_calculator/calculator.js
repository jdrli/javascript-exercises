const add = function (num1, num2) {
  return num1 + num2;
}

const subtract = function (num1, num2) {
  return num1 - num2;
}

const sum = function (array) {
  let output = 0;

  for (let i = 0; i < array.length; i++) {
    output += array[i];
  }

  return output;
}

const multiply = function (array) {
  let output = 1;

  for (const num of array) {
    output *= num;
  }
  
  return output; 
}

const power = function (base, exponent) {
  let output = 1;

  for (let i = 0; i < exponent; i++) {
    output *= base;
  }

  return output;
}

const factorial = function (number) {
  let output = 1;

  for (let i = number; i > 0; i--){
    output *= i;
  }

  return output
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
