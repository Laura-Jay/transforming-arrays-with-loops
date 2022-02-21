//Still need to get working, need to understand how to access and manipulate objects

//Write a function that takes an array of objects representing Pokémon, with string properties name and type, 
//and returns a descriptive sentence about them and their type: "<name> is a <type in lowercase> type Pokémon.".

function pokemonType(pokemonArray){
const fireType = ["charmander", "growlithe", "ponyta", "arcinine", "rapidash", "charmeleon", "charizard"];
const waterType = ["squirtle", "warturtle", "blastoise", "staryu", "starmie", "psyduck"];
const grassType = ["bulbasaur", "ivysaur", "venosaur"];
const pokedex = []; 

for (let pokemon of pokemonArray){
    if (fireType.includes(pokemonArray.name)){
    pokedex.push(pokemonArray.name, " is a fire type Pokemon.");
    } else if (waterType.includes(pokemonArray.name)){
        pokedex.push(pokemonArray.name, " is a water type Pokemon.");
    }       else if (grassType.includes(pokemonArray.name)){
            pokedex.push(pokemonArray.name, " is a grass type Pokemon.");
    }           else {
                pokedex.push("Pokemon type not found.");    
    } 
}
return pokedex;
}

//test case: 

console.log(pokemonType([{ name: 'Bulbasaur', type: 'Grass' }, { name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }]), 
"[Bulbasaur is a grass type Pokémon., Charmander is a fire type Pokémon., Squirtle is a water type Pokémon.]");
