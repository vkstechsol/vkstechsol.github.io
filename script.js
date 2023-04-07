const words = [" 1- Serendipity (सेरेन्डिपिटी) - the occurrence and development of events by chance in a happy", " 2- Equanimity (समता) - mental calmness, composure, and evenness of temper, especially in a difficult situation.d ", " 3- Ambivalent (द्विधा) - having mixed feelings or contradictory ideas about something or someone.", " 4- Capricious (उचित नहीं) - given to sudden and unaccountable changes of mood or behavior.", " 5- Hindi: अनियमित"];

let index = 0;
const wordElement = document.getElementById("word");

function changeWord() {
  wordElement.innerText = words[index];
  index = (index + 1) % words.length;
}

setInterval(changeWord, 3000);
