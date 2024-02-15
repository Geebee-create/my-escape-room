import inquirer from 'inquirer';
import { insertName, askRestartGame, userDirection, wordPuzzle, getRandomInt, func } from './inq.js';
import { endGame, restartGame } from './functions.js';

async function startGame() {
    const playerName = await insertName();
    console.log(`Hi, ${playerName}! Let's start the game.`);

    await firstDirection();
}

let firstDirection = async () => {
    console.log('You are an archaeologist searching for the undiscovered tomb of Nefertiti. During your search of subterranean tunnels, in the depths of The Valley of The Kings, you realize you are lost. Will you be able to find an exit?');
    console.log('Which way do you go first? There is a chamber on your left; it gives you a bad feeling, but you can\'t help wondering what might be inside. Do you choose to enter the creepy chamber on your left, or brave the cracking ground to the right? ');

    let direction = await userDirection();

    if (direction === 'Left') {
        console.log('You have chosen the chamber to the left.');
        console.log('As you enter the dark chamber, the ground beneath you trembles, and a legion of scarab beetles pours out from hidden crevices. Their sharp pincers close in around you, sealing your fate.');
        console.log('END OF GAME.')
        const restart = await askRestartGame(); 
        if (restart) {
            await startGame(); 
        } else {
            console.log("Thanks for playing!");
            endGame(); 
        }

    } else {
        console.log('You have chosen to brave the cracking ground to the right.');
        console.log('As you take your next step, the ground beneath you trembles and cracks. You take a leap forward just in time, narrowly avoiding a perilous descent. Your heart races as you look back at the dark chasm that could have been your fate');
    }

    await secondDirection();
}


let secondDirection = async () => {
    console.log('Ahead of you are the doors to two different chambers. Above the doors "Death is but the doorway to new life" is painted in hieroglyphs. You are scared to enter either door. They seem identical and you need to make a random decision. But can you make the correct decision? Do you choose entrance 1 or entrance 2?');


    let playerChoice = await func();
    console.log(playerChoice);

    if (playerChoice == getRandomInt(2)) {
        console.log("Congrats! You have correctly chosen the safe entrance.");
        console.log('');
    } else {
        console.log("You have not correctly chosen the safe entrance.");
        console.log('As you enter the chamber, you are startled by the sudden appearance of a horrifying mummy! Before you can react, it grabs you, and... BOO! You have been scared to death!');
        console.log('END OF GAME.')
        const restart = await askRestartGame(); 
        if (restart) {
            await startGame(); 
        } else {
            console.log("Thanks for playing!");
            endGame();
        }
    }

    await thirdDirection();
}


let thirdDirection = async () => {
    console.log('As you continue ahead, your torchlight illumiates a large, forboding doorway made of stone. On the doors surface are squares. Each square depicts an Ancient Egyptian proverb in hyraglifs. You are able to translate the hyroglifs, and you need to decide which square to press');
    console.log('Can you remember which you also saw painted on a wall earlier?')

    let { option2 } = await wordPuzzle();

    if (option2 === "Death is but the doorway to new life") {
        console.log('Phew! You have chosen the correct message');
        console.log('With a low, echoing rumble, the massive door begins to creak open, revealing the secrets that lie beyond. ');
    } else {
        console.log('As you press the square, the ground begins to shake. Have you chosen the wrong square?');
        console.log('The ground shakes beneath you, and with a deafening roar, the floor collapses into an inescapable trap.')
        console.log('END OF GAME')
        const restart = await askRestartGame(); 
        if (restart) {
            await startGame(); 
        } else {
            console.log("Thanks for playing!");
            endGame(); 
        }
    }

}


(async () => {
    await startGame();
})();


