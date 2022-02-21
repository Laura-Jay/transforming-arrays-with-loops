/**
 * Takes an array of numbers and returns an array of plain objects, with properties.
 * @param {number[]} numArr - takes an array of numbers
 * @returns {object} an object which has properties: the numbers values listed as number and the numbers value listed as a string
**/

function numberAndString(numArr){
const resultArr = [];

    for (let number of numArr){
    let numAsString = number.toString();
    let valuesArr = [];
    valuesArr.push("asNumber : ", number);
    valuesArr.push("asString : ", numAsString);
    resultArr.push(valuesArr);    
}
return resultArr;
}

//test case

console.log(numberAndString([ 4, -3.2, 0]), "[{asNumber : 4, asString: '4' },{asNumber : -3.2, asString: '3.2' },{asNumber : 0, asString: '0' }");