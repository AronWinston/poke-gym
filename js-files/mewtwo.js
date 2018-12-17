'use strict'

axios.get("https://pokeapi.co/api/v2/pokemon/mewtwo/")
.then(response => {

    let data = response.data;
    console.log(data);

    let array = [];
    for(let i=0; i < data.abilities.length; i++){
        
        array.push(data.abilities[i].ability.name);
    }
    
    
    let mewtwo = new Pokemon ( data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, array);

    let pokeClass = document.querySelector(".poke");
            pokeClass.innerHTML=`<p class="hp">HP:  ${mewtwo.hp}</p><p class="attack">ATTACK: ${mewtwo.attack}</p>
                                <p class="defense">DEFENSE: ${mewtwo.defense}</p><p class="skills" <strong>ABILITIES: <br> </strong>${mewtwo.ability}</p>`;
    
    


});

let stats = document.querySelector(".poke");
let ball = document.querySelector(".ball");
let card = document.querySelector(".text");
let evo=document.querySelector("#carouselExampleFade")

ball.addEventListener('click',(event)=>{

    stats.classList.toggle("reveal");
    card.classList.toggle("reveal");

})

card.addEventListener('click',(event) =>{

    evo.classList.toggle("reveal");
})