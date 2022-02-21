/**
 * Takes an array of strings and returns an array with the number of characters in each string.
 * @param {string[]} words - array of strings input
 * @returns {number[]} - a number array showing the length of each string in words
 */

function countStrings(words){
const lengthArr = [];

for (let word of words){
    lengthArr.push(word.length);
} return lengthArr;
}

//test case

console.log(countStrings(["hello", "academy", "code", "Dante", "", "supercalifragalistic"]), "[ 5, 7, 4, 5, 0, 20]");