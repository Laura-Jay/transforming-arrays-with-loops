/**
 * Takes a list of names and returns the initials. 
 * @param {string[]} namesArr - array of names in format <forename> <surname>
 * @returns {string[]} -  array of initials 
 */

function onlyInitials(namesArr){
const initialsArr = [];

    for ( let fullName of namesArr){
    let nameArr = fullName.split(" ");
    let initialArr = [];
        for ( let name of nameArr){
        initialArr.push(name[0]);    
        }
    let initialString = initialArr.join(".");
    initialsArr.push(initialString);
} return initialsArr;
}


//test case 

console.log(onlyInitials(["Ash Ketchum", "Lucy Heartfilia", "Yugi Moto"]), ["A.K", "L.H", "Y.M"]);
console.log(onlyInitials(["Jo Jo Rabbit", "Jemima PuddleDuck", "George"]), ["J.J.R", "J.P", "G"]);