$(document).ready(function (){
    fetch("pokedex.json")
    .then((rawData)=>rawData.json())
    .then(pokedex=>{
        // console.log (pokedex)
        let linkid=0;

        pokedex.forEach(pokemon=> {

            let id = pokemon["id"].toString().padStart(4,'0');
                let name = pokemon["name"]["english"];
                let image = pokemon["image"]["hires"];
                let types = pokemon["type"];
                let typesHtml = "";
                types.forEach(type => {
                    typesHtml +=  `<span class = "${type}">${type} </span>`
                });
            $('.pokemon-container').append(

             ` <div class="card">
                <img 
                src="${image}" 
                alt="${name}"
                />
                <ul type =none>
                    <li class="pokemon-id">#${id}</li>
                    <li class="pokemon-name">
                    <a href="pages/pokemon.html?id=${linkid++}">${name}</a> 
                    </li>
                    <li class="pokemon-type">
                   ${typesHtml}
                    </li>
                </ul>
            </div>`

            );
            console.log(typesHtml);
         });

    })
})
    
