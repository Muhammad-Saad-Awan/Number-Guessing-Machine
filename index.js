import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: " Please Guess a Number between 1-6:",
    },
]);
console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log(" Congragulation! You guessed right number");
}
else {
    console.log("Oops! You guessed wrong number");
}
