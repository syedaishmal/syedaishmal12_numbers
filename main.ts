#! /usr/bin/env node

import inquirer from "inquirer"
// 1) computer will generate a random number . Done.

// 2) user input for guessing number 

// 3) compare user input with computer generated number and show result 

const randomNumber = Math.floor(Math.random() * 10 + 1);


const answer = await inquirer.prompt([
    {
        name: "userguessedNumber" ,
        type: "number" ,
        message: "Please guess a number between 1-10: ",
    },
]);

if(answer.userguessedNumber === randomNumber ){
    console.log("congratulations! you gussed right number .")
}else {
      console.log("you guess wrong number");
};