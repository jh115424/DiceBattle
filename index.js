const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const beginGame = () => {
  rl.question("Welcome to Dice Battle! Begin the game!", () => {
    rl.question("Player one may start! Press Enter", () => {
      rollDice();
    });
  });
};
beginGame();

///////////////////////////////////////////////////////////////////////////////////////

let battleSoldiers = [0, 1, 2, 3, 4, 5, 6, 7];
let startGame;
let startGame2;
let answer;

const rollDice = () => {
  rl.question("Player 1, Roll your dice!", () => {
    const startGame = Math.floor(Math.random() * 6) + 1;
    console.log(`Player 1, You picked dice # ${startGame}!`);

    rl.question("Press enter to continue", () => {
      rl.question("Player 2, Roll your dice!", () => {
        const startGame2 = Math.floor(Math.random() * 6) + 1;
        console.log(`Player 2, You picked dice # ${startGame2}!`);

        const showdownPause = () => {
          console.log("Let the battle begin!");
          compareScores(startGame, startGame2);
          rl.question("Do you want a rematch?", (answer) => {
            if (answer === "yes") {
              console.log("Push enter to start!");
              beginGame();
            } else {
              console.log("Thanks for playing!");
              rl.close();
            }
          });
        };
        setTimeout(showdownPause, 4000);
      });
    });
  });
};

/////////////////////////////////////////////////////////////////////////////////////////

const compareScores = (startGame, startGame2) => {
  if (startGame > startGame2) {
    console.log("Player2 wins!");
  } else if (startGame < startGame2) {
    console.log("Player 1 wins");
  } else {
    console.log("There is a tie!");
  }
};


