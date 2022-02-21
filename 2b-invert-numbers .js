// Write a function that takes an array of numbers, and returns an array with the same numbers, but signs flipped.

/**
 * Flips the signs in an array of numbers
 * @param {number[]} numArr - array of numbers provided
 * @returns {number[]} - numArr but with signs reversed
 */

//transformation function
function invertNumber(num){
    return num * -1;
}

function invertNumbers(numArr){
    const invertedArr = numArr.map(invertNumber);
    return invertedArr;
}

//test case 
console.log(invertNumbers([1,-3,2,8,-10]), "[-1, 3, -2, -8, 10]")