// console.log(process.argv);
const args = process.argv.slice(2);

// console.log(args);

//sum.js takes 2 numbers and adds them together
if (args.length !== 2) {
  console.error("Please provide exactly 2 numbers");
  //   return;
  process.exit(1);
}

if (typeof args[1] !== "number") {
  console.error("Please provide the second value as number");
  //   return;
  process.exit(1);
}

const num1 = parseFloat(args[0]);
let angabe1 = args[0].toLowerCase().trim();
let angabe2 = parseFloat(args[1]);
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// console.log(alphabet[1]);
function findIndex(param) {
  const indexLetter = alphabet.indexOf(param);
  return indexLetter;
}

const arrayAngabe = angabe1.split(" ");
console.log(arrayAngabe);

let temporalyResult = [];

let result = [];

for (let i = 0; i < arrayAngabe.length; i++) {
  let word = arrayAngabe[i];

  let arrayWord = Array.from(word);
  console.log(arrayWord);

  for (let i = 0; i < arrayWord.length; i++) {
    findIndex(arrayWord[i]);
    if (angabe2 > 0) {
      temporalyResult.push(
        alphabet[findIndex(arrayWord[i]) + Math.abs(angabe2)]
      );
      // console.log(temporalyResult);
    } else if (angabe2 < 0) {
      temporalyResult.push(
        alphabet[findIndex(arrayWord[i]) - Math.abs(angabe2)]
      );
      // console.log(temporalyResult);
    }
  }
  result.push(temporalyResult.join(""));
  console.log(result);
  temporalyResult = [];
}

let finalResult = result.join(" ");
console.log(finalResult);
