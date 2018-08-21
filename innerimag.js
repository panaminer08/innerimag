

        class Reynaldo {
            constructor() {
                this.all = []
            }
        
            add(pokemon) {
                this.all.push(pokemon)
            }

        }    

        class Pokemon {
            constructor(hp, attack, defense, abilities, name) {
                this.hp = hp
                this.attack = attack
                this.defense = defense
                this.abilities = abilities
                this.name= name
            }
        
        }
    
        let reynaldo = new Reynaldo()

        let ul = document.getElementsByTagName("ul")
        let li = document.createElement("li")
        

axios.get("https://fizal.me/pokeapi/api/25.json")
    .then((pokes) => {
        

        let thunder= pokes.data;
        

         let electric = new Pokemon(
            thunder.stats[5].base_stat,
            thunder.stats[4].base_stat,
            thunder.stats[3].base_stat,
            thunder.stats[0].base_stat,
        

         )
        reynaldo.add(electric)

            
         

     console.log(thunder.stats[0])
    })




 axios.get("https://fizal.me/pokeapi/api/620.json")
 .then((psy) =>{ 
     
    let psychic = psy.data
    
    let psycho = new Pokemon(
    psychic.stats[5].base_stat,
    psychic.stats[4].base_stat,
    psychic.stats[3].base_stat,
    psychic.stats[0].base_stat,        
    )  
    
    reynaldo.add(psycho)
    

})

 axios.get("https://fizal.me/pokeapi/api/54.json")
 .then((water) =>{
  
   
   let bullet = water.data

    let squirt = new Pokemon(
        bullet.stats[5].base_stat,
        bullet.stats[4].base_stat,
        bullet.stats[3].base_stat,
        bullet.stats[0].base_stat,
    )

    reynaldo.add(squirt)
 })
    

 


 axios.get("https://fizal.me/pokeapi/api/25.json")
 .then((pokes) => {

    let pokemon = pokes.data

    let type = () => {
    let div1 = document.getElementById("pika")
    div1.innerHTML= "";
    let div = document.createElement("div"); 
    div1.id= pokemon.name
    div.innerHTML=`    
    <div class="card">
    <div class="image">
    <image class="responsive-img" src= "https://upload.wikimedia.org/wikipedia/en/a/a6/Pokémon_Pikachu_art.png"> 
    <div class="card content"><span class="card-title">${pokemon.name}</span>
    <div><ul><li><span>H.P.:</span> ${pokemon.stats[5].base_stat} </li><li><span>ATTACK:</SPAN>${pokemon.stats[4].base_stat}</li>
    <li><span>Defense:</span>${pokemon.stats[3].base_stat}</li>
    <li><span>Ability:</span>${pokemon.stats[0].stat.name}</li>
    <li><span>Damage:</span>${pokemon.stats[0].base_stat}</li></ul></div>
    </div>
    </div>
    </div>`
    
    div.onclick = function(event){
        event.stopPropagation();
        div1.removeChild(div)
    }
    div1.appendChild(div);
    } 
    document.getElementById("reynit").onclick = function (event) {
        type(pokes)}
})


axios.get("https://fizal.me/pokeapi/api/620.json")
.then((psy) =>{ 

    let psychic = psy.data
    let type2 = () => {
    let div2 = document.getElementById("mien");
    div2.innerHTML = '';
    let di = document.createElement("div");
    di.id= psychic.name
    di.innerHTML=`    
    <div class="card">
    <div class="image">
    <image class="responsive-img" src= "http://orig02.deviantart.net/b9a0/f/2012/011/7/9/pokemon_mienshao_by_luckyfantasy4ever-d4m1hhm.jpg"> 
    <div class="card content"><span class="card-title">${psychic.name}</span>
    <span><ul><li><span>H.P:</span> ${psychic.stats[5].base_stat}</li> 
    <li><span>Attack:</span> ${psychic.stats[4].base_stat}</li>
    <li><span>Defense:</span> ${psychic.stats[3].base_stat}</li>
    <li><span>Abilities</span> ${psychic.stats[0].stat.name}</li>
    <li><span>Damage:</span> ${psychic.stats[0].base_stat}</li>
    </ul></span>
    </div>
    </div>
    </div>`

 di.onclick = function(event){
     event.stopPropagation();
     div2.removeChild(di)
 }   
div2.appendChild(di);   
}
document.getElementById("reyna").onclick = function (event) {
    type2(psychic)}
})

axios.get("https://fizal.me/pokeapi/api/54.json")
 .then((water) =>{
   
    
    let duck = water.data
    let type3 = () => {
    let div3 = document.getElementById("psy");
    div3.innerHTML = '';
    let de = document.createElement("div");
    de.id = duck.name
    de.innerHTML=`    
    <div class="card">
    <div class="image">
    <image class="responsive-img" src= "http://orig00.deviantart.net/25cc/f/2016/003/6/9/pokemon_art_academy__psyduck_by_gamer_princess8-d9mnwyt.jpg"> 
    <div class="card content"><span class="card-title">${duck.name}</span>
    <span><ul><li><span>H.P:</span> ${duck.stats[5].base_stat}</li> 
    <li><span>Attack:</span> ${duck.stats[4].base_stat}</li>
    <li><span>Defense:</span> ${duck.stats[3].base_stat}</li>
    <li><span>Abilities</span> ${duck.stats[0].stat.name}</li>
    <li><span>Damage:</span> ${duck.stats[0].base_stat}</li>
    </ul></span>
    </div>
    </div>
    </div>`
    de.onclick = function(event){
        event.stopPropagation();
        div3.removeChild(de)
    }
    div3.appendChild(de);
    }
 document.getElementById("reyno").onclick = function (event) {
    type3(duck) }
    })


   

// //   pokerender(pokemon);
// //   type(psychic)
// //  }
// // )

// // pokemon.forEach(attack => {
// // let div1 = document.getElementById("reynit");
// // let div = document.createElement("div"); 
// // div.setAttribute("class") 
// //     div.innerHTML=`    
// //     <div class="card">
// //     <div class="image">
// //     <image class="responsive-img" src= "https://upload.wikimedia.org/wikipedia/en/a/a6/Pokémon_Pikachu_art.png"> 
// //     <div class="card content"><span class="card-title">"Pikachu</span>
// //     </div>
// //     </div>
// //     </div>`

// //     div1.appendChild(div);
// //   console.log(attack.name)