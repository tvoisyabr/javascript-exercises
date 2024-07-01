const sumAll = function (firstNum, secondNum) {
    let sum = 0;

    if(firstNum < 0 || secondNum < 0 || typeof firstNum !== "number" || typeof secondNum !== "number") {
        sum = "ERROR";
    } else 
    if (firstNum > secondNum) {
        for (let i = secondNum; i <= firstNum; i++) {
            sum += i;
        } 
    } else if (secondNum > firstNum) {
        for (let i = firstNum; i <= secondNum; i++) {
            sum += i;
        } 
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
