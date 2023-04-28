console.log('yo');

// Pokedex project


// Number of Pokemon (AKA objects) using the first 150 pokemon in the PokeAPI


// The createPokeCard function creates a new card (AKA section element) and adds the new card to the DOM inside of the div with the id of "container"
function createPokeCard (pokemon) {

    // Setting the innerHTML for the new card using the data/object that is passed into the "pokemon" parameter. Also, using the toUpperCase method on the pokemon name so it wil in UPPERCASE text

}

// The getPokemonData function makes an Axios GET request to the PokeAPI using a specific pokemon ID/number then takes the returned data and passes it into the createpokeCard function
// NOTE: The argument/value passed into the "ID" parameter will be a number created in the loop in the next function (AKA the getPokmeon function)


// The getPokemon function loops through all the pokemon id's and runs/exectues the pokemonData function for each ID
// NOTE: using async/await on this function because the code in the getPokemonData function is asynchronous (there is axios request in that function)
