#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
};
async function rainbow() {
    let rainbows = chalkAnimation.rainbow("Calculator");
    await sleep();
    rainbows.stop();
    console.log(`
    |  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|
    `);
}
(async () => {
    await rainbow();
})();
async function askQuestion() {
    const answers = await inquirer.prompt([
        {
            name: 'operator',
            type: 'list',
            message: 'Which operation do you want?',
            choices: ['Addition', 'Subtration', 'Multiplication', 'Division'],
        },
        {
            type: 'number',
            name: 'num1',
            message: 'Enter the first number: ',
        },
        {
            type: 'number',
            name: 'num2',
            message: 'Enter the second number: ',
        },
    ]);
    if (answers.operator === 'Addition') {
        console.log(chalk.green(answers.num1 + answers.num2));
    }
    else if (answers.operator === 'Subtration') {
        console.log(chalk.green(answers.num1 - answers.num2));
    }
    else if (answers.operator === 'Multiplication') {
        console.log(chalk.green(answers.num1 * answers.num2));
    }
    else if (answers.operator === 'Division') {
        console.log(chalk.bgYellow(answers.num1 / answers.num2));
    }
    else {
        console.log('Invalid Input');
    }
}
async function startAgain() {
    let again;
    do {
        await askQuestion();
        again = await inquirer.prompt({
            type: 'input',
            name: 'restart',
            message: 'Would you like to restart the program?',
        });
    } while (again.restart === 'y' || again.restart === 'Y');
}
startAgain();