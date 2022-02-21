//Still need to get working, need to understand how to access and manipulate objects

//Write a function that takes an array of objects representing Pokémon, with string properties name and type, 
//and returns a descriptive sentence about them and their type: "<name> is a <type in lowercase> type Pokémon.".


//transformation function
function pokeInfo(pokemon){
    return pokemon.name + " is a " + pokemon.type + " type Pokemon."
}

function pokemonType(pokemonArray){
    const pokedex = pokemonArray.map(pokeInfo);
    return pokedex;
    
}

//test case: 

console.log(pokemonType([{ name: 'Bulbasaur', type: 'Grass' }, { name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }]), 
"[Bulbasaur is a grass type Pokémon., Charmander is a fire type Pokémon., Squirtle is a water type Pokémon.]");

