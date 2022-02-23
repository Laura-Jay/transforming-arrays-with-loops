/**
 * Takes an array of numbers and returns an array of plain objects, with properties.
 * @param {number[]} numArr - takes an array of numbers
 * @returns {object} an object which has properties: the numbers values listed as number and the numbers value listed as a string
**/

//transformation function
function printType(number){
    let typeObj = {
        asNumber: number,
        asString: number.toString()
    };
    return typeObj;
}

//map function
function numberAndString(numArr){
    const numObj = numArr.map(printType);
    return numObj;
}

//test cases

console.log(numberAndString([ 4, -3.2, 0]), "[{asNumber : 4, asString: '4' },{asNumber : -3.2, asString: '3.2' },{asNumber : 0, asString: '0' }");
console.log(numberAndString([ 100, -12, 1.7]), "[{asNumber : 100, asString: '100' },{asNumber : -12, asString: '-12' },{asNumber : 1.7, asString: '1.7' }");
console.log(numberAndString([]), "[]");
