const input = document.querySelector('.form-input');
const form = document.getElementById('form');
const div = document.querySelector('.div-pokemons')


form.addEventListener('submit',async(e)=>{
  
    e.preventDefault()

try{
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`);
    const pokemonJson = await pokemon.json()
    const {name,base_experience,abilities,sprites} = pokemonJson;

    return div.innerHTML = 
    `<div class="renderConteiner">
        <img class="pokemon-img" src="${sprites.front_default}"></img>
        <p>Name: ${name}</p>
        <p>Base experience: ${base_experience}</p>
        <p>Abilities: ${abilities[0].ability.name},${abilities[1].ability.name}</p>
    </div>`
}
catch(err){
    return div.innerHTML =   
    `<div class="renderConteiner">
        <p>Enter a valid name</p>
    </div>`
}
})

