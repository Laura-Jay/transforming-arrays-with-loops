//Write a function that takes an array of names, and returns an array with a greeting for each of those names: "Hello, <name>!".

function sayHello(names){
 const greeting = [];

 for (let name of names){
  greeting.push(`Hello, ${name}!`);  
 }
 return greeting;
}

//test case

console.log(
	sayHello(["Ash", "Beth", "Ciara"],["Hello, Ash!", "Hello, Beth!", "Hello, Ciara!"]),
)
