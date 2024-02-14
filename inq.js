import inquirer from 'inquirer';

export async function insertName() {
    let { userInput } = await inquirer.prompt({
        type: 'input',
        name: 'userInput',
        message: 'What is your name?'
    });

    return userInput;
}

// below commented out until later on...
// export async function chooseDifficulty() {
    // let { userChoice } = await inquirer.prompt({
        // type: 'list',
        // name: 'userChoice',
        // message: 'Choose your difficulty level',
        // choices: ['Easy', 'Difficult']
    // });

    // return userChoice === 'Easy' ? new Easy() : new Difficult();
// }

export let userDirection = async () => {
    let { option } = await inquirer.prompt({
        type: 'list',
        name: 'option',
        message: 'There is a chamber on your left, it gives you a bad feeling but you cant help wondering what might be inside. Do you choose to enter the creepy chamber on your left, or brave the cracking ground ahead?',
        choices: ['To the chamber on your left', 'The cracking ground ahead']
    })
    return option
}

