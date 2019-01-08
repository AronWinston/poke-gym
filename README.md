# poke-gym

poke-gym was a collaboration of multiple personal pokedex projects.  Myself along with my partner, Christine, worked together remotely to create one application which utilized code from both of our Pokedex projects.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
pip install foobar
```

## Usage

```javascript
axios.get("https://pokeapi.co/api/v2/pokemon/aron/")
.then(response => {

    let data = response.data;
    console.log(data);
    
    let array = [];
    for(let i=0; i < data.abilities.length; i++){
        
        array.push(data.abilities[i].ability.name);
    }
    
    
    let aron = new Pokemon ( data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, array);

    let pokeClass = document.querySelector(".poke");
            pokeClass.innerHTML=`<p class="hp">HP:  ${aron.hp}</p><p class="attack">ATTACK: ${aron.attack}</p>
                                <p class="defense">DEFENSE: ${aron.defense}</p><p class="skills" <strong>ABILITIES: <br> </strong>${aron.ability}</p>`;
    
 });


```



## License
Aron Winston Jr. Software Engineer
