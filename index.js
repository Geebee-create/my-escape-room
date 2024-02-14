import inquirer from 'inquirer';
// i will need to add chooseDifficulty below 
// import { insertName, chooseDifficulty } from './inq.js';
import { insertName, userDirection } from './inq.js';
// import { Difficulty, Easy, Difficult } from './classes.js';

async function startGame() {
    const playerName = await insertName();
    console.log(`Hello, ${playerName}! Let's start the game.`);

    // const chosenDifficulty = await chooseDifficulty();
    // console.log(chosenDifficulty.getDescription());
    firstDirection ()

    // if (chosenDifficulty instanceof Easy) {
        // console.log('Easy mode activated! Multiplier:', chosenDifficulty.multiplier);
    // } else if (chosenDifficulty instanceof Difficult) {
        // console.log('Difficult mode activated! Multiplier:', chosenDifficulty.multiplier);
    }




let firstDirection = async () => {
console.log('You are an archaeologist searching for the undiscovered tomb of Nefertiti. During your search of subteranian tunnels, in the depths of The Valley of The Kings, you realise you are lost. Will you be able to find an exit?')
console.log('Which way do you go first?')
let direction = await userDirection()
if(direction === 'To the chamber on your left'){
    console.log('You have chosen the chamber')
}else{
    console.log('You have chosen to brave the cracking ground ahead')
}
}









// /this is an example usage:
(async () => {
     await startGame();
})();

