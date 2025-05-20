const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const beginGame = () => {
  rl.question("Welcome to Dice Battle! Begin the game", () => {
    console.log("Player one may start!");
    rollDice();
  });
};
beginGame();

///////////////////////////////////////////////////////////////////////////////////////

let battleSoldiers = [0, 1, 2, 3, 4, 5, 6, 7];
let startGame;

const rollDice = () => {
  rl.question("Player 1, Roll your dice!", () => {
    const startGame = Math.floor(Math.random() * 6) + 1;
    console.log(`Player 1, You picked dice # ${startGame}!`);

    rl.question("Player 2, Roll your dice!", () => {
      const startGame = Math.floor(Math.random() * 6) + 1;
      console.log(`Player 2, You picked dice # ${startGame}!`);

      rl.close();
    });
  });
};

/////////////////////////////////////////////////////////////////////////////////////////

// let player1 = 0;
// let player2 = 0;

// let gameResult = 0;

// // const compareScores = (rollDice) => {
// //     rl.getPrompt("Begin the game", () => {
// //         console.log('Player one may start')

// //     })

// // }

// + → Addition
// - → Subtraction
// * → Multiplication
// / → Division
// % → Modulus (Remainder)
// Comparison Operators:

// === → Strict equality (checks value & type)
// !== → Strict inequality (checks value & type)
// > → Greater than
// < → Less than
// >= → Greater than or equal to
// <= → Less than or equal to
// logical Operators:

// && → AND (both conditions must be true)
// || → OR (at least one condition must be true)
// ! → NOT (reverses a condition)
