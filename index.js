import inquirer from 'inquirer';
import { insertName, chooseDifficulty } from './inq.js';
import { Difficulty, Easy, Difficult } from './classes.js';

async function startGame() {
    const playerName = await insertName();
    console.log(`Hello, ${playerName}! Let's start the game.`);

    const chosenDifficulty = await chooseDifficulty();
    console.log(chosenDifficulty.getDescription());

    if (chosenDifficulty instanceof Easy) {
        console.log('Easy mode activated! Multiplier:', chosenDifficulty.multiplier);
    } else if (chosenDifficulty instanceof Difficult) {
        console.log('Difficult mode activated! Multiplier:', chosenDifficulty.multiplier);
    }
}

// this is an example usage:
(async () => {
    await startGame();
})();