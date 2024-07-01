const removeFromArray = function(arr, ...elementToRemove) {
   const filteredArray = arr.filter(item => !elementToRemove.includes(item));
   return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
