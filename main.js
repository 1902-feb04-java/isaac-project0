'use scrict';

//Random Number Generator
function getRandomArb(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
//Create Pokemon Object
var pokemonObj1 = {
    id: null,
    name: null,
    sprite: null,
    type: null,
    move1: null,
    move2: null,
    move3: null,
    move4: null,
}
// Second pokemon
var pokemonObj2 = {
    id: null,
    name: null,
    sprite: null,
    type: null,
    move1: null,
    move2: null,
    move3: null,
    move4: null,
}
// Grab pokemon
pokemonObj1.id = getRandomArb(1,807);
pokemonObj2.id = getRandomArb(1,807);

// document.addEventListener('DOMContentLoaded', () => {
//     getUserPokemon();
//     let pokeName = document.getElementById('user-pokemon-name');
//     let pokeSprite = document.getElementById('bottom-pokemon');

//     // connect data from HTML to our Pokemon
//     pokeName.textContent = pokemonObj1.name;
//     pokeSprite.src = pokemonObj1.sprite;
// });


document.addEventListener('DOMContentLoaded', () => {
    //User Pokemon
    var pokeUserName = document.getElementById('user-pokemon-name');
    var pokeUserSprite = document.getElementById('bottom-pokemon');
    var userHP = document.querySelector(".user-hp");
    // User Moves
    var pokeUserMove1 = document.getElementById('battle-option-1');
    var pokeUserMove2 = document.getElementById('battle-option-2');
    var pokeUserMove3 = document.getElementById('battle-option-3');
    var pokeUserMove4 = document.getElementById('battle-option-4');
    // User Type
    var pokeUserType1 = ' ';
    var pokeUserType2 = ' ';
    // User Stats
    var pokeUserSpeed=60;
    var pokeUserSpecialD=60;
    var pokeUserSpecialA=60;
    var pokeUserDefense=60;
    var pokeUserAttack=60;
    var pokeUserHP=80;
    // User Level
    var pokeUserLevel = getRandomArb(50,60);
    //********************************/

    //Enemy Pokemon
    var pokeEnemyName = document.getElementById('enemy-pokemon-name');
    var pokeEnemySprite = document.getElementById('top-pokemon');
    var enemyHP = 80;
    // Enemy Moves
    var pokeEnemyMove1 = document.getElementById('enemy-option-1');
    var pokeEnemyMove2 = document.getElementById('enemy-option-2');
    var pokeEnemyMove3 = document.getElementById('enemy-option-3');
    var pokeEnemyMove4 = document.getElementById('enemy-option-4');

    // Enemy Type
    var pokeEnemyType1 = ' ';
    var pokeEnemyType2 = ' ';

    // Enemy Stats
    var pokeEnemySpeed= 60;
    var pokeEnemySpecialD=60;
    var pokeEnemySpecialA=60;
    var pokeEnemyDefense=60;
    var pokeEnemyAttack=60;
    var pokeEnemyHP=80;

    // Enemy Level
    var pokeEnemyLevel = getRandomArb(45,55);

    // User Generate Pokemon
    console.log(1);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonObj1.id}/`)
            // response.json() returns a promise of the whole response
            //    body parsed from JSON.
            // as soon as we get the response headers...
            //   ...chain to that promise.
            .then(response => response.json())
            // when we get _that_ value, process it onto the page.
            .then(data => {
                console.log(data);
                pokeUserName.textContent = data.name;
                pokeUserSprite.src = data.sprites.back_default;
                pokeUserMove1.textContent = data.moves[getRandomArb(0,55)].move.name;
                pokeUserMove2.textContent = data.moves[getRandomArb(0,54)].move.name;
                pokeUserMove3.textContent = data.moves[getRandomArb(0,53)].move.name;
                pokeUserMove4.textContent = data.moves[getRandomArb(0,52)].move.name;
                pokeUserType1.textContent = data.types[0].type.name;
                pokeUserType2.textContent = data.types[0].type.name;
                pokeUserSpeed.textContent = data.stats[0].base_stat;
                pokeUserSpecialD.textContent= data.stats[1].base_stat;
                pokeUserSpecialA.textContent = data.stats[2].base_stat;
                pokeUserDefense.textContent = data.stats[3].base_stat; 
                pokeUserAttack.textContent = data.stats[4].base_stat; 
                pokeUserHP.textContent = data.stats[5].base_stat;  

            })
            
            // using .catch() at the end of a promise chain will handle
            // any errors along the way.
            .catch(err => {
                console.log(err)
            });
    console.log(2);

    // Enemy Generate Pokemon
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonObj2.id}/`)
        .then(response => response.json())
        // when we get _that_ value, process it onto the page.
        .then(data => {
            console.log(data);
            pokeEnemyName.textContent = data.name;
            pokeEnemySprite.src = data.sprites.front_default;
            pokeEnemyMove1.textContent = data.moves[getRandomArb(0,55)].move.name;
            pokeEnemyMove2.textContent = data.moves[getRandomArb(0,54)].move.name;
            pokeEnemyMove3.textContent = data.moves[getRandomArb(0,53)].move.name;
            pokeEnemyMove4.textContent = data.moves[getRandomArb(0,52)].move.name;
            pokeEnemyType1.textContent = data.types[0].type.name;
            pokeEnemyType2.textContent = data.types[0].type.name;
            pokeEnemySpeed.textContent = data.stats[0].base_stat;
            pokeEnemySpecialD.textContent = data.stats[1].base_stat;
            pokeEnemySpecialA.textContent = data.stats[2].base_stat;
            pokeEnemyDefense.textContent = data.stats[3].base_stat; 
            pokeEnemyAttack.textContent = data.stats[4].base_stat; 
            pokeEnemyHP.textContent = data.stats[5].base_stat;  
        })
        // using .catch() at the end of a promise chain will handle
        // any errors along the way.
        .catch(err => {
            console.log(err)
        });

    console.log(3);
    // If Time is available get power for Moves
    
    // Set Start HP for Pokemon
    userHP.textContent = Math.round(pokeHPStart(pokeUserHP, pokeUserLevel));
    enemyHPNum = pokeHPStart(pokeEnemyHP,pokeEnemyLevel); //working
    userHPNum = Math.round(pokeHPStart(pokeUserHP, pokeUserLevel) - 70);
    console.log(pokeEnemySpeed.valueOf());
    // Now that we have Pokemon Info, We fight
    let pokeUserAlive = true;
    let pokeEnemyAlive = true;
    console.log(4);
     
    var text = document.getElementById("battle-text");
    var edamage;

        // MOVE 1
        var battleOption1 = document.getElementById("battle-option-1")
        battleOption1.addEventListener('click', () => {
            var text = document.getElementById("battle-text");
            // User Attacks
            setTimeout( ()=> {
            text.innerHTML = `${pokeUserName.textContent} used ${pokeUserMove1.textContent}!`;
            let edamage = Math.floor(damageDone(pokeUserLevel, 50,pokeUserAttack, pokeUserSpecialA, pokeUserDefense, pokeUserSpecialD));
            enemyHP -= edamage; 
            console.log(enemyHP);
            console.log(edamage);
            var ehpBar = document.getElementById('hp-bar-top');
            ehpBar.style.width = `${enemyHP}%`;//`${changeHPBar}%`;
            },2000);

            // Enemy Attacks
            
            text.innerHTML = `${pokeEnemyName.textContent} used ${pokeEnemyMove1.textContent}!`;
            let udamage = Math.floor(damageDone(pokeEnemyLevel, 50,pokeEnemyAttack, pokeEnemySpecialA, pokeEnemyDefense, pokeEnemySpecialD));
            userHPNum  -= udamage; 
            console.log(userHPNum );
            console.log(udamage);
            var uhpBar = document.getElementById('hp-bar-bottom');
            uhpBar.style.width = `${userHPNum}%`;//`${changeHPBar}%`;
            
            // CHECK STATUS
            if(enemyHP<=0){
                document.getElementById('hp-bar-top').style.width =  "0%";
                pokeEnemyAlive = false;
                var text = document.getElementById("battle-text");
                text.textContent = `${pokeEnemyName.textContent} used fainted!`
                            
            }else if(userHPNum<=0){
                document.getElementById('hp-bar-bottom').style.width =  "0%";
                pokeUserAlive = false;
                var text = document.getElementById("battle-text");
                text.textContent = `${pokeUserName.textContent} used fainted!`
            }
        });

        // MOVE 2
        var battleOption2 = document.getElementById("battle-option-2")
        battleOption2.addEventListener('click', () => {
            var text = document.getElementById("battle-text");
            // User Attacks
            setTimeout( ()=> {
                text.innerHTML = `${pokeUserName.textContent} used ${pokeUserMove2.textContent}!`;
                let edamage = Math.floor(damageDone(pokeUserLevel, 50,pokeUserAttack, pokeUserSpecialA, pokeUserDefense, pokeUserSpecialD));
                enemyHP -= edamage; 
                console.log(enemyHP);
                console.log(edamage);
                var ehpBar = document.getElementById('hp-bar-top');
                ehpBar.style.width = `${enemyHP}%`;//`${changeHPBar}%`;
                },2000);
    
                // Enemy Attacks
                
                text.innerHTML = `${pokeEnemyName.textContent} used ${pokeEnemyMove2.textContent}!`;
                let udamage = Math.floor(damageDone(pokeEnemyLevel, 50,pokeEnemyAttack, pokeEnemySpecialA, pokeEnemyDefense, pokeEnemySpecialD));
                userHPNum  -= udamage; 
                console.log(userHPNum );
                console.log(udamage);
                var uhpBar = document.getElementById('hp-bar-bottom');
                uhpBar.style.width = `${userHPNum}%`;//`${changeHPBar}%`;
                
                //
                if(enemyHP<=0){
                    document.getElementById('hp-bar-top').style.width =  "0%";
                    pokeEnemyAlive = false;
                    var text = document.getElementById("battle-text");
                    text.textContent = `${pokeEnemyName.textContent} used fainted!`
                                
                }else if(userHPNum<=0){
                    document.getElementById('hp-bar-bottom').style.width =  "0%";
                    pokeUserAlive = false;
                    var text = document.getElementById("battle-text");
                    text.textContent = `${pokeUserName.textContent} used fainted!`
                }
        });

        var battleOption3 = document.getElementById("battle-option-3")
        battleOption3.addEventListener('click', () => {
            var text = document.getElementById("battle-text");
            // User Attacks
            setTimeout( ()=> {
                text.innerHTML = `${pokeUserName.textContent} used ${pokeUserMove3.textContent}!`;
                let edamage = Math.floor(damageDone(pokeUserLevel, 50,pokeUserAttack, pokeUserSpecialA, pokeUserDefense, pokeUserSpecialD));
                enemyHP -= edamage; 
                console.log(enemyHP);
                console.log(edamage);
                var ehpBar = document.getElementById('hp-bar-top');
                ehpBar.style.width = `${enemyHP}%`;//`${changeHPBar}%`;
                },2000);
    
                // Enemy Attacks
                
                text.innerHTML = `${pokeEnemyName.textContent} used ${pokeEnemyMove3.textContent}!`;
                let udamage = Math.floor(damageDone(pokeEnemyLevel, 50,pokeEnemyAttack, pokeEnemySpecialA, pokeEnemyDefense, pokeEnemySpecialD));
                userHPNum  -= udamage; 
                console.log(userHPNum );
                console.log(udamage);
                var uhpBar = document.getElementById('hp-bar-bottom');
                uhpBar.style.width = `${userHPNum}%`;//`${changeHPBar}%`;
                
                //
                if(enemyHP<=0){
                    document.getElementById('hp-bar-top').style.width =  "0%";
                    pokeEnemyAlive = false;
                    var text = document.getElementById("battle-text");
                    text.textContent = `${pokeEnemyName.textContent} used fainted!`
                                
                }else if(userHPNum<=0){
                    document.getElementById('hp-bar-bottom').style.width =  "0%";
                    pokeUserAlive = false;
                    var text = document.getElementById("battle-text");
                    text.textContent = `${pokeUserName.textContent} used fainted!`
                }
        });

        var battleOption4 = document.getElementById("battle-option-4")
        battleOption4.addEventListener('click', () => {
            var text = document.getElementById("battle-text");
            setTimeout( ()=> {
                text.innerHTML = `${pokeUserName.textContent} used ${pokeUserMove4.textContent}!`;
                let edamage = Math.floor(damageDone(pokeUserLevel, 50,pokeUserAttack, pokeUserSpecialA, pokeUserDefense, pokeUserSpecialD));
                enemyHP -= edamage; 
                console.log(enemyHP);
                console.log(edamage);
                var ehpBar = document.getElementById('hp-bar-top');
                ehpBar.style.width = `${enemyHP}%`;//`${changeHPBar}%`;
                },2000);
    
                // Enemy Attacks
                
                text.innerHTML = `${pokeEnemyName.textContent} used ${pokeEnemyMove4.textContent}!`;
                let udamage = Math.floor(damageDone(pokeEnemyLevel, 50,pokeEnemyAttack, pokeEnemySpecialA, pokeEnemyDefense, pokeEnemySpecialD));
                userHPNum  -= udamage; 
                console.log(userHPNum );
                console.log(udamage);
                var uhpBar = document.getElementById('hp-bar-bottom');
                uhpBar.style.width = `${userHPNum}%`;//`${changeHPBar}%`;
                
                //
                if(enemyHP<=0){
                    document.getElementById('hp-bar-top').style.width =  "0%";
                    pokeEnemyAlive = false;
                    var text = document.getElementById("battle-text");
                    text.textContent = `${pokeEnemyName.textContent} used fainted!`
                                
                }else if(userHPNum<=0){
                    document.getElementById('hp-bar-bottom').style.width =  "0%";
                    pokeUserAlive = false;
                    var text = document.getElementById("battle-text");
                    text.textContent = `${pokeUserName.textContent} used fainted!`
                }
        });
        

        // Check if Enemy faints
        
    
            

});
//console.log(pokemonObj1);

// HP Calculator
let pokeHPStart = (hpBase,pokeLevel) =>{
    let hp = (((hpBase * 2) * pokeLevel )/100) + pokeLevel + 10;
    return hp;
}

// Damage Calculator Function
let damageDone = (attackerLevel, power, attack, specialA, defense, specialD) => {
    let damage = ( (2)*attackerLevel + 2 ) *(power) *((attack+specialA)/(defense+specialD))/300;
    return damage;
}

// Type Modifier Function, if time permits

