const words = [" 1- Chatty - धबातूनी ", " 2- Kinship - संबंध, रिश्ता", " 3- Magnanimous - उदार, दयालु, ", " 4- Nefarious - दुर्जन, दुष्ट,", " 5- Stingy- कंजूस ", "6- Fearless -निडर ", " 7- Slim - दुबला-पतला, ", " 8- Diligent - मेहनती", " 9- Candid - मासूम"," 10-Docile - विनम्र"," 11- Silently - दिल ही दिल में", " 12- Get Annoyed - नाराज़ होना", " 13- Back out - मुकर जाना", " 14 - Make promises - वादे करना:", " 15- Guide - मार्गदर्शक" ];

let index = 0;
const wordElement = document.getElementById("word");

function changeWord() {
  wordElement.innerText = words[index];
  index = (index + 1) % words.length;
}

setInterval(changeWord, 3500);
