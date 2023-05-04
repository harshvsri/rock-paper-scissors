const choices = ["Rock", "Paper", "Scissor"];

const getComputerChoice = () => choices[Math.floor(Math.random() * 3)];

const getUserChoice = () => {
  let userChoice = prompt("Enter Rock/Paper/Scissor: ");
  return userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
};

const errorCheck = (choices, userChoice) => {
  if (choices.includes(userChoice)) {
    return true;
  }
  return false;
};

const logic = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    console.log(`Its a tie!, ${userChoice} ${computerChoice}`);
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissor") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissor" && computerChoice === "Paper")
  ) {
    console.log(`You Won!, ${userChoice} beats ${computerChoice}`);
  } else {
    console.log(`You Lose!, ${computerChoice} beats ${userChoice}`);
  }
};

const computerChoice = getComputerChoice();
let errResult = false;
do {
  const userChoice = getUserChoice();
  errResult = errorCheck(choices, userChoice);

  if (errResult) {
    logic(userChoice, computerChoice);
    break;
  }
} while (!errResult);
