//declare variables

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//randomize the choice of the computer
/* 
This function takes an array of strings and using the random function in JS and floor function (for rounding)
and by picking a random rounded number between 0 to 2 it picks an index of a string in the array (a so-called 
choice of the computer). This choice is later interpreted by the function following this one.
*/

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

//convert strings for choices into strings of words
/*
This function takes a string and it compares it to the attribute passed to the function (letter) and for each
string it returns a specific string ("Rock" for "r", "Paper" for "p" and "Scissors" for "s").
*/

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

//increment userScore, show choices in string under score box and display green button glow

/* 
This function (in the case you win) displays the score of the user and the score of the 
computer in the box below the header (it also increments the user score by one whenever you
win) and then displays the string that you see under the box with the scores. This function 
also adds green glow around the button of either choice.
*/

function winner(choice_of_user, choice_of_computer) {
  let wordChoice = convertToWord(choice_of_user);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(choice_of_user)} beats ${convertToWord(choice_of_computer)}. You win! You picked ${wordChoice}.`;
  document.getElementById(choice_of_user).classList.add('green-glow');
  setTimeout(() => document.getElementById(choice_of_user).classList.remove('green-glow'), 300);
};

//increment computerScore, show choices in string under score box and display red button glow

/* 
This function (in the case you lose) displays the score of the user and the score of the 
computer in the box below the header (it also increments the computer score by one whenever you
win) and then displays the string that you see under the box with the scores. This function 
also adds red glow around the button of either choice.
*/

function loser(choice_of_user, choice_of_computer) {
  let wordChoice = convertToWord(choice_of_user);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(choice_of_user)} loses against ${convertToWord(choice_of_computer)}. You lose! You picked ${wordChoice}.`;
  document.getElementById(choice_of_user).classList.add('red-glow');
  setTimeout(() => document.getElementById(choice_of_user).classList.remove('red-glow'), 300);
}

//show choices in string under score box and display button glow

/* 
This function (in the case it is a draw between the choices) displays the string that you 
see under the box with the scores. This function also adds gray glow around the button of either choice.
*/

function draw(choice_of_user, choice_of_computer) {
  let wordChoice = convertToWord(choice_of_user);
  result_p.innerHTML = `It is a draw between ${convertToWord(choice_of_user)} and ${convertToWord(choice_of_computer)}. You neither lose or win! You picked ${wordChoice}.`;
  document.getElementById(choice_of_user).classList.add('gray-glow');
  setTimeout(() => document.getElementById(choice_of_user).classList.remove('gray-glow'), 300);
}

//decide depending on the choice of both user and computer which function between win, lose and draw to run the

/*
This function decides for each possible case between the choices of the user and the 
computer to run a specific function. Using a switch sentence, the function decides whether it should
run the win, lose or draw function.
*/

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      winner(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      loser(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

//the main function

/*
This function creates event listeners that trigger on click. This 
function creates 3 event listeners, and each pass an attribute to 
the game function. Depending on what choice the user is making, the 
function decides whether it should pass "r", "p" or "s" strings as 
arguments to the game() function.
*/

function main() {
  rock_div.addEventListener("click", () => game("r"));

  paper_div.addEventListener("click", () => game("p"));

  scissors_div.addEventListener("click", () => game("s"));
}

main();
