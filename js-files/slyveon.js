'use strict'

axios.get("https://pokeapi.co/api/v2/pokemon/700/")
.then(response => {

    let data = response.data;
    console.log(data);
    
    let array = [];
    for(let i=0; i < data.abilities.length; i++){
        
        array.push(data.abilities[i].ability.name);
    }
    
    
    let slyveon = new Pokemon ( data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, array);

    let pokeClass = document.querySelector(".poke");
            pokeClass.innerHTML=`<p class="hp">HP:  ${slyveon.hp}</p><p class="attack">ATTACK: ${slyveon.attack}</p>
                                <p class="defense">DEFENSE: ${slyveon.defense}</p><p class="skills" <strong>ABILITIES: <br> </strong>${slyveon.ability}</p>`;
    
    


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