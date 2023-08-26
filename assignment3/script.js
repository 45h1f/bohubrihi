let low = 1;
let high = 10;
let correct_ans = Math.floor(Math.random() * (high - low + 1)) + low;
console.log(correct_ans);
let chancesLeft = 3;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const hint = document.querySelector(".hint");
const chancesLeftDisplay = document.getElementById("chancesLeft");
const resultDisplay = document.getElementById("result");
const restartButton = document.getElementById("restartButton");

guessButton.addEventListener("click", () => {
  const userGuess = parseInt(guessInput.value);

  if (userGuess === correct_ans) {
    resultDisplay.textContent = "You Win!";
    guessInput.disabled = true;
    guessButton.disabled = true;
    restartButton.style.display = "block";
  } else {
    chancesLeft--;
    chancesLeftDisplay.textContent = chancesLeft;

    if (chancesLeft === 0) {
      resultDisplay.textContent = "You Lose!";
      guessInput.disabled = true;
      guessButton.disabled = true;
      restartButton.style.display = "block";
    } else {
      hint.textContent =
        userGuess < correct_ans ? "Correct answer is greater!" : "Correct answer is smaller!";
    }
  }
});

restartButton.addEventListener("click", () => {
  correct_ans = Math.floor(Math.random() * (high - low + 1)) + low;
  chancesLeft = 3;
  guessInput.value = "";
  guessInput.disabled = false;
  guessButton.disabled = false;
  hint.textContent = "";
  chancesLeftDisplay.textContent = chancesLeft;
  resultDisplay.textContent = "";
  restartButton.style.display = "none";
});
