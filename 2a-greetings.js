//Write a function that takes an array of names, and returns an array with a greeting for each of those names: "Hello, <name>!".

//transformation function
function addHello(names){
return `Hello, ${names}!`;
}

function sayHello(nameArr){
return nameArr.map(addHello);
}

//test case

console.log(
	sayHello(["Ash", "Beth", "Ciara"]),["Hello, Ash!", "Hello, Beth!", "Hello, Ciara!"],
)
