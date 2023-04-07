
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
       messageContainer.textContent = `Sorry, you ran out of attempts. The word was ${hiddenWord}.`;
      messageContainer.style.color = "red";
      inputBox.disabled = true;
      submitButton.disabled = true;
      
    } else {
      messageContainer.textContent = `Incorrect guess. You have ${attempts} attempts remaining. Incorrect letters: ${incorrectLetters}.`;
      
      messageContainer.style.color = "red";
      
      // Show correct letters in letter boxes
      for (let i = 0; i < guess.length; i++) {
        if (hiddenWord.includes(guess[i])) {
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








// ..................................This code is correct......................

// const hiddenWord = document.getElementById("hidden-word").textContent;
// const inputBox = document.getElementById("input-box");
// const submitButton = document.getElementById("submit-button");
// const messageContainer = document.getElementById("message-container");

// let attempts = 5;

// submitButton.addEventListener("click", function() {
//   const guess = inputBox.value.toUpperCase();

//   if (guess.length !== 5) {
//     messageContainer.textContent = "Please enter a 5-letter word.";
//     return;
//   }

//   attempts--;

//   if (guess === hiddenWord) {
//     messageContainer.textContent = "Congratulations, you found the word!";
//     messageContainer.style.color = "#4CAF50";
//     inputBox.disabled = true;
//     submitButton.disabled = true;
//     return;
//   } else {
//     const incorrectLetters = getIncorrectLetters(guess);

//     if (attempts === 0) {
//       messageContainer.textContent = `Sorry, you ran out of attempts. The word was ${hiddenWord}.`;
//       messageContainer.style.color = "red";
//       inputBox.disabled = true;
//       submitButton.disabled = true;
      
//     } else {
//       messageContainer.textContent = `Incorrect guess. You have ${attempts} attempts remaining. Incorrect letters: ${incorrectLetters}.`;
      
      
//       messageContainer.style.color = "red";
      
//     }
//   }
// });

// function getIncorrectLetters(guess) {
//   const incorrectLetters = [];

//   for (let i = 0; i < guess.length; i++) {
//     if (!hiddenWord.includes(guess[i])) {
//       incorrectLetters.push(guess[i]);
      
//     }
//   }
  

//   return incorrectLetters.join(", ");
// }



// ..................................This code is correct......................



// // select the letter boxes and the hidden word
// const letterBoxes = document.querySelectorAll('.letter-box');
// const hiddenWord = "apple"; // this is just an example, you can generate a random word or get it from the user input

// // initialize the number of attempts
// let attempts = 5;

// // add event listener to the letter boxes
// letterBoxes.forEach((box, index) => {
//   box.addEventListener('input', () => {
//     const guessedLetter = box.value.toLowerCase();
//     if (hiddenWord.includes(guessedLetter)) {
//       // if the guessed letter is correct, mark the box as green
//       box.style.backgroundColor = "green";
//       // check if all the boxes are filled with correct letters
//       if ([...letterBoxes].every((box) => hiddenWord.includes(box.value.toLowerCase()))) {
//         alert("Congratulations, you've guessed the word!");
//       }
//     } else {
//       // if the guessed letter is incorrect, mark the box as red and decrease the number of attempts
//       box.style.backgroundColor = "red";
//       attempts--;
//       if (attempts === 0) {
//         alert("Game over, you've run out of attempts.");
//       }
//     }
//   });
// });
