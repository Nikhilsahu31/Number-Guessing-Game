
const input = document.querySelector("#input");
const check = document.getElementById("check");
const result = document.getElementById("result");
const pre = document.querySelector(".pre");
let attempts = document.getElementById("attempts");

let previousGuesses = [];
let attemptsLeft = 10;
const randomNumber = Math.floor(Math.random() * 100 + 1);

check.addEventListener("click", () => {
   const guess = parseInt(input.value);

   if (isNaN(guess) || guess < 1 || guess > 100) {
      result.textContent = "Please enter a valid number between 1 and 100.";
      return;
   }

   previousGuesses.push(guess);
   attemptsLeft--;

   if (guess === randomNumber) {
      result.textContent = "You win!";
      endGame();
   } else if (guess < randomNumber) {
      result.textContent = "Too low!";
   } else {
      result.textContent = "Too high!";
   }

   pre.textContent = previousGuesses.join(', ');
   attempts.textContent = attemptsLeft;

   if (attemptsLeft === 0 && guess !== randomNumber) {
      result.textContent = `You lose! The number was ${randomNumber}.`;
      endGame();
   }
});

function endGame() {
   input.disabled = true;
   check.disabled = true;
}
