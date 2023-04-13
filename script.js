const words = [" 1- Chatty - बातूनी ", " 2- Kinship - संबंध, रिश्ता", " 3- Magnanimous - उदार, दयालु, ", " 4- Nefarious - दुर्जन, दुष्ट,", " 5- Stingy- कंजूस ", "6- Fearless -निडर ", " 7- Slim - दुबला-पतला, ", " 8- Diligent - मेहनती", " 9- Candid - मासूम"," 10-Docile - विनम्र"," 11- Silently - दिल ही दिल में", " 12- Get Annoyed - नाराज़ होना", " 13- Back out - मुकर जाना", " 14 - Make promises - वादे करना:", " 15- Guide - मार्गदर्शक"," 16- Cunning - चालाक", " 17- Hoodwink - आंख में धूल झोंकना"," 18- Befool - मूर्ख बनाना"," 19- Creep - रेंगना"," 20- Carve - नक़्क़ाशी करना"," 21- Chew - चबाना"," 22- Dance - नृत्य"," 23- Desire - इच्छा"," 24- Dip - डुबोना"," 25- Cultivate - खेती करना"," 26- Civilize - सभ्य बनाना"," 27- Deceive - धोखा देना"," 28- Defeat - हराना"," 29- Be - होना"," 30- Behold - निहारना"," 31- Bend - झुकना",
               "32- Cross - पार करना"," 33- Beg - भीख मांगना"," 34- Believe - विश्वास करना"," 35- Behave - व्यवहार करना"," 36- Bleed - खून बहाना"," 37- Boast - डींग मारना"," 38- Borrow - उधार मांगना"," 39- Breed - जनना"," 40- Elect - चुनना"," 41- Feed - खिलाना"," 42- Threaten - धमकी देना"," 43- Drool - लार"," 44- Biting Nails - नाखून चबाना"," 45- Hate - घृणा"," 46- Hire - किराये पर लेना"," 47- Harass - उत्पीड़ित करना"," 48- Insult - अपमान करना"," 49- Instigate - उकसाना"," 50- Interfere - दखल देना" ];

// let index = 0;
// const wordElement = document.getElementById("word");

// function changeWord() {
//   wordElement.innerText = words[index];
//   index = (index + 1) % words.length;
// }

// setInterval(changeWord, 3800);

let index = 0;
let index1 = 0;
const wordElement = document.getElementById("word");
const wordElement1 = document.getElementById("word1");
const nextButton = document.getElementById("nextButton");

function changeWord() {
  wordElement.innerText = words[index];
  index = (index + 1) % words.length;
}

function changeWord1() {
  wordElement1.innerText = words[index1];
  index1 = (index1 + 1) % words.length;
}

nextButton.addEventListener("click", () => {
  changeWord();
  changeWord1();
});

changeWord();
setInterval(changeWord1, 3000);

