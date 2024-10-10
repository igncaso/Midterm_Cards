;(() => { 
    const queryString = window.location.search; // Get the query string from the URL
    const urlParams = new URLSearchParams(queryString); // Parse the query string to extract parameters
    const id = urlParams.get("id"); // Retrieve the 'id' parameter from the URL
    console.log(id); // Log the 'id' value for debugging

    fetch("../pokedex.json") // Fetch the pokedex data from a local JSON file
        .then((rawData) => rawData.json()) // Convert the raw response data to JSON format
        .then((pokedex) => { // Process the fetched JSON data
            console.log(pokedex[id]); // Log the Pokemon data corresponding to the 'id' for debugging

            let pokemon = pokedex[id]; // Assign the Pokemon data to a variable
            let pokemonId = pokemon["id"].toString().padStart(4, '0'); // Format the Pokemon ID to have leading zeros
            let name = pokemon["name"]["english"]; // Get the English name of the Pokemon
            let image = pokemon["image"]["hires"]; // Get the high-resolution image URL of the Pokemon
            let desc = pokemon["description"]; // Get the description of the Pokemon
            let types = pokemon["type"]; // Get the type(s) of the Pokemon
            let typesHtml = ""; // Initialize an empty string for the type HTML elements

            // Loop through each type and create a span element with a class based on the type
            types.forEach((type) => {
                typesHtml += `<span class="${type.toLowerCase()}">${type}</span>`; // Append the type HTML
            });

            let species = pokemon["species"]; // Get the species of the Pokemon
            let height = pokemon["profile"]["height"]; // Get the height of the Pokemon
            let weight = pokemon["profile"]["weight"]; // Get the weight of the Pokemon
            let abilities = pokemon["profile"]["ability"]; // Get the abilities of the Pokemon
            let abilitiesHtml = ""; // Initialize an empty string for the abilities HTML elements
            
            // Loop through each ability and create a span element for it
            
            abilities.forEach((ability) => {
                abilitiesHtml += `<span class="pokemon-ability">${ability[0]}</span>`; // Append the ability HTML
            });

            // Display the Pokemon details on the page

            $("#pokemon-page-name").html(name); // Set the name of the Pokemon in the HTML
            $(".pokemon-page-description").html(desc); // Set the description of the Pokemon in the HTML
            $(".pokemon-page-image").html(`<img src="${image}" alt="${name}">`); // Set the image of the Pokemon in the HTML
            $(".pokemon-type").html(typesHtml); // Set the types of the Pokemon in the HTML

            // Display detailed stats for the Pokemon

            $(".pokemon-page-id").html(pokemonId); // Set the Pokemon ID in the HTML
            $(".pokemon-page-species").html(species); // Set the species of the Pokemon in the HTML
            $(".pokemon-page-height").html(height); // Set the height of the Pokemon in the HTML
            $(".pokemon-page-weight").html(weight); // Set the weight of the Pokemon in the HTML
            $(".pokemon-page-abilities").html(abilitiesHtml); // Set the abilities of the Pokemon in the HTML

            // Get base stats of the Pokemon

            let hp = pokemon["base"]["HP"]; // Get the HP stat
            let attack = pokemon["base"]["Attack"]; // Get the Attack stat
            let defense = pokemon["base"]["Defense"]; // Get the Defense stat
            let sp_attack = pokemon["base"]["Sp. Attack"]; // Get the Special Attack stat
            let sp_defense = pokemon["base"]["Sp. Defense"]; // Get the Special Defense stat
            let speed = pokemon["base"]["Speed"]; // Get the Speed stat

            // Calculate percentages for the stats based on a max value of 200

            let hp_per = (hp / 200) * 100; // Calculate percentage for HP
            let attack_per = (attack / 200) * 100; // Calculate percentage for Attack
            let defense_per = (defense / 200) * 100; // Calculate percentage for Defense
            let sp_attack_per = (sp_attack / 200) * 100; // Calculate percentage for Special Attack
            let sp_defense_per = (sp_defense / 200) * 100; // Calculate percentage for Special Defense
            let speed_per = (speed / 200) * 100; // Calculate percentage for Speed
            let total = hp + attack + defense + sp_attack + sp_defense + speed; // Calculate the total base stat value

            // Display the base stat values on the page

            $(".hp-val").html(`<div> ${hp}</div>`); // Set the HP value in the HTML
            $(".attack-val").html(`<div>${attack}</div>`); // Set the Attack value in the HTML
            $(".defense-val").html(`<div>${defense}</div>`); // Set the Defense value in the HTML
            $(".sp-attack-val").html(`<div>${sp_attack}</div>`); // Set the Special Attack value in the HTML
            $(".sp-defense-val").html(`<div>${sp_defense}</div>`); // Set the Special Defense value in the HTML
            $(".speed-val").html(`<div>${speed}</div>`); // Set the Speed value in the HTML
            $(".total").html(`<div> ${total}</div>`); // Set the total base stat value in the HTML

            // Animate the stat bars with calculated widths
            
            $(".hp div").animate({ width: (200 / 100) * hp_per }, 1000); // Animate HP bar width
            $(".attack div").animate({ width: (200 / 100) * attack_per }, 1000); // Animate Attack bar width
            $(".defense div").animate({ width: (200 / 100) * defense_per }, 1000); // Animate Defense bar width
            $(".sp-attack div").animate({ width: (200 / 100) * sp_attack_per }, 1000); // Animate Special Attack bar width
            $(".sp-defense div").animate({ width: (200 / 100) * sp_defense_per }, 1000); // Animate Special Defense bar width
            $(".speed div").animate({ width: (200 / 100) * speed_per }, 1000); // Animate Speed bar width
        })  
})();
