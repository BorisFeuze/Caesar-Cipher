// console.log(process.argv);
const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error("Please provide exactly 2 numbers");
  process.exit(1);
}

let angabe1 = args[0].toLowerCase().trim();
let angabe2 = parseFloat(args[1]);

if (typeof +args[1] !== "number") {
  console.error("Please provide the second value as number");
  process.exit(2);
}

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

function findIndex(param) {
  const indexLetter = alphabet.indexOf(param);
  return indexLetter;
}

const arrayAngabe = angabe1.split(" ");
console.log(arrayAngabe);

let result = [];

for (let i = 0; i < arrayAngabe.length; i++) {
  let word = arrayAngabe[i];
  let temporalyResult = [];
  let arrayWord = Array.from(word);
  // console.log(arrayWord);

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
  // console.log(result);
}

let finalResult = result.join(" ");
console.log(finalResult);

process.exit(0);
