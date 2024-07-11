const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((acc, current) => acc + current, 0);
};

const multiply = function(array) {
  return array.reduce((acc, current) => acc * current, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(f) {
	if (f === 0) {
    return 1;
  }

  let result = 1;

  for (let i = f; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
