import inquirer from 'inquirer';


export async function insertName() {
    let { userInput } = await inquirer.prompt({
        type: 'input',
        name: 'userInput',
        message: 'What is your name?'
    });

    return userInput;
}


export let userDirection = async () => {
    let { option } = await inquirer.prompt({
        type: 'list',
        name: 'option',
        message: '',
        choices: ['Left', 'Right']
    })
    return option
}


export let wordPuzzle = async () => {
    let option2 = await inquirer.prompt({
        type: "list",
        name: 'option2',
        message: "Word puzzle",
        choices: ["In many forms we shall return", "For every joy there is a price to be paid", "Rather be touched by fire than by dishonour", "Death is but the doorway to new life", "Everlastingness has been bestowed upon me",]
    })
    return option2
}


export function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}


export const func = async () => {
    const { mathsresult } = await inquirer.prompt({
        name: "mathsresult",
        type: "list",
        choices: ["1", "2"]
    });
    return mathsresult;
};


export async function askRestartGame() {
    const { startGame } = await inquirer.prompt({
        type: 'confirm',
        name: 'startGame',
        message: 'Do you want to restart the game?',
        default: true,

    });

    return startGame;
};


export let stealOrNo = async () => {
    let jewels = await inquirer.prompt({
        type: 'list',
        name: 'jewels',
        message: 'Do you want to steal the jewels',
        choices: ["Yes! gimme gimme gimme!", "No, stealing the jewels feels like a really bad idea."]

    });

    return jewels;
};


export let riddleChallenge = async () => {
    let theriddle = await inquirer.prompt({
        type: 'list',
        name: 'theriddle',
        message: 'Can you solve this riddle? I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?',
        choices: ["Shadow", "Echo", "Breath", "Rain", "Sand"]
    });

    return theriddle;
};