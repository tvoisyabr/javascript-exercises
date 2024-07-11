const palindromes = function (str) {
  let normStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let reversedStr = normStr.split('').reverse().join('');
  return normStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
