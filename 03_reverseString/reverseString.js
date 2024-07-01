const reverseString = function(str) {
    let strArray = str.split("");
    let strArrayReversed = strArray.reverse();
    let strReversed = strArrayReversed.join("");

    return strReversed;
};

// Do not edit below this line
module.exports = reverseString;
