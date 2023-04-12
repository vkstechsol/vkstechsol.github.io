
const hiddenWord = document.getElementById("hidden-word").textContent;
const letterBoxes = document.querySelectorAll(".letter-box");
const inputBox = document.getElementById("input-box");
const submitButton = document.getElementById("submit-button");
const messageContainer = document.getElementById("message-container");

let attempts = 5;

submitButton.addEventListener("click", function() {
  const guess = inputBox.value.toUpperCase();

  if (guess.length !== 5) {
    messageContainer.textContent = "Please enter a 5-letter word.";
    return;
  }

  attempts--;

  if (guess === hiddenWord) {
    messageContainer.textContent = "Congratulations, you found the word!";
    messageContainer.style.color = "green";
    inputBox.disabled = true;
    submitButton.disabled = true;
    return;
  } else {
    const incorrectLetters = getIncorrectLetters(guess);

    if (attempts === 0) {
       messageContainer.textContent = `Sorry, you ran out of attempts.`;
      messageContainer.style.color = "red";
      inputBox.disabled = true;
      submitButton.disabled = true;
      
    } else {
      messageContainer.textContent = `Incorrect guess. You have ${attempts} attempts remaining. Incorrect letters: ${incorrectLetters}.`;
      
      messageContainer.style.color = "red";
      
      // Show correct letters in letter boxes
//       for (let i = 0; i < guess.length; i++) {
//         if (hiddenWord.includes(guess[i])) {
//           letterBoxes[i].textContent = guess[i];
//         }
//       }
      
      
      for (let i = 0; i < guess.length; i++) {
        if (hiddenWord[i] === guess[i]) {
          letterBoxes[i].textContent = guess[i];
        }
      }
      
      
      
    }
  }
});

function getIncorrectLetters(guess) {
  const incorrectLetters = [];

  for (let i = 0; i < guess.length; i++) {
    if (!hiddenWord.includes(guess[i])) {
      incorrectLetters.push(guess[i]);
      
    }
  }

  return incorrectLetters.join(", ");
}







