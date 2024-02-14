import inquirer from "inquirer";

export async function insertName() {
    let { userInput } = await inquirer.prompt({
        type: "input",
        name: 'userInput',
        message: 'What is your name?'
    })

    return userInput
}

export async function chooseDifficulty() {
    let { userChoice } = await inquirer.prompt({
        type: "list",
        name: 'userChoice',
        message: 'Choose your difficulty level',
        choices: ["Easy", "Difficult"]
    })
    
    return userChoice
}