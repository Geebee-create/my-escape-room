import inquirer from 'inquirer';
import { insertName, userDirection, wordPuzzle, getRandomInt, func, askRestartGame, stealOrNo, riddleChallenge } from './inq.js';
import { endGame } from './functions.js';
import { Curse } from './classes.js';


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
        console.log('As you take your next step, the ground beneath you trembles and cracks. You take a leap forward just in time, narrowly avoiding a perilous descent. Your heart races as you look back at the dark chasm that could have been your fate.');
    }

    await secondDirection();
}


let secondDirection = async () => {
    console.log('Ahead of you are the doors to two different chambers. Above the doors, "Death is but the doorway to new life" is painted in hieroglyphs. You are scared to enter either door. They seem identical and you need to make a random decision. But can you make the correct decision? Do you choose entrance 1 or entrance 2?');


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
    console.log('As you continue ahead, your torchlight illumiates a large, forboding doorway made of stone. On the doors surface are squares. Each square depicts an Ancient Egyptian proverb in hieroglyphs. You are able to translate them, and you need to decide which square to press.');
    console.log('Can you remember which one of the proverbs you also saw painted on a wall earlier?')

    let { option2 } = await wordPuzzle();

    if (option2 === "Death is but the doorway to new life") {
        console.log('Phew! You have chosen the correct proverb.');
        console.log('With a low, echoing rumble, the massive door begins to creak open, revealing the secrets that lie beyond. ');
    } else {
        console.log('As you press the square, the ground begins to shake. Have you chosen the wrong proverb?');
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
    await fourthDirection();
}


let fourthDirection = async () => {
    console.log("Amidst hundreds of golden treasures, Nefertiti's mummy lies cold, adorned with a golden necklace bearing her name in sacred hieroglyphs. Rings of unparalleled beauty grace her fragile hands.");
    console.log("The jewels are hard to resist. You need to make a decision. Are you going to steal the jewels or not?")

    let { jewels } = await stealOrNo();

    if (jewels === "No, stealing the jewels feels like a really bad idea.") {
        console.log("Phew. You did the right thing. Who knows? You could have been cursed or awoken Nefertiti's mummy!");
    } else {
        console.log("Yes! Gimme gimme gimme!")


        const ancientCurse = new Curse('Ancient Curse');

        console.log(`Uh oh! ${ancientCurse.getDescription()}. All of the life drains from you in a matter of seconds. As the darkness falls in on you, it looks like you are going to be in the company of Nefertiti's mummy for a long, long time!`);
        console.log('END OF GAME');

        const restart = await askRestartGame();
        if (restart) {
            await startGame();
        } else {
            console.log("Thanks for playing!");
            endGame();
        }
    }
    await rPuzzle();
}


let rPuzzle = async () => {
    console.log("One of the walls of Nefertit's tomb features an awe inspiring door of solid gold. It displays a riddle in hieroglyphs with potential answers engraved into large squares. The air thickens with mystery, and a message whispers into your consciousness: 'Decode the riddle, unravel the secrets, for beyond this door,the mysteries of Ancient Egypt lie in wait.")
    let { theriddle } = await riddleChallenge();

    if (theriddle === "Echo") {
        console.log("")
        console.log("As your intellect triumphs over ancient enigma, the air crackles with energy. The colossal gold door creaks open, revealing a grand library bathed in ethereal light. Amongst the scrolls you find a map with directions to a nearby exit.")
        console.log("You step into the light of the outside world with a wealth of knowledge, fame and riches before you.")
        console.log("CONGRATS! YOU WON THE GAME!")
        const restart = await askRestartGame();
        if (restart) {
            await startGame();
        } else {
            console.log("Thanks for playing!");
            endGame();
        }
    } else {
        console.log("Ooops, it looks like you got the riddle wrong.")
        console.log("As you stand upon the precipice of discovery, the ground crumbles beneath your feet, plunging you into an endless abyss. No one will ever know of your incredible discovery.")
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