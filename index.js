let firstPassEl = document.getElementById("first-pass-el");
let secondPassEl = document.getElementById("second-pass-el");
let thirdPassEl = document.getElementById("third-pass-el");
let fourthPassEl = document.getElementById("fourth-pass-el");

let characters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
  'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '*', '&', '$',
  '#', '!', '?', '<', '>', '+'
];

let charLimit = 9;


function generatePass() {
  let randomPass = "";
  for (let i = 0; i < charLimit; i++) {
    let randomNum = Math.floor(Math.random() * characters.length);
    randomPass += characters[randomNum];
  }
  return randomPass;
}

function getGeneratePass() {
  firstPassEl.textContent = generatePass();
  secondPassEl.textContent = generatePass();
  thirdPassEl.textContent = generatePass();
  fourthPassEl.textContent = generatePass();
}

