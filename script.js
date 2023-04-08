const words = [" 1- Perfidious - धोखेबाज, बेईमान, विश्वासघाती ", " 2- Kinship - संबंध, रिश्ता, बंधन ", " 3- Magnanimous - उदार, दयालु, महानुभाव", " 4- Nefarious - दुर्जन, दुष्ट, अनैतिक", " 5- Lethargy - सुस्ती, आलस्य, अव्यावर्तिकता ", "6- Omnipotent - सर्वशक्तिमान, सर्वव्यापी", " 7- Hierarchy - श्रेणीबद्धता, ", " 8- Intrepid - निडर, निर्भीक, दिलेर ", " 9- Juxtaposition - एक साथ रखना "," 10- Eloquent - बोलचाल कुशलता से सम्बंधित" ];

let index = 0;
const wordElement = document.getElementById("word");

function changeWord() {
  wordElement.innerText = words[index];
  index = (index + 1) % words.length;
}

setInterval(changeWord, 3500);
