const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let result = "";
  for (let index = 0; index < expr.length; index += 10) {
    const letterNumCode = expr.slice(index, index + 10);
    if (letterNumCode === "**********") {
      result += " ";
      continue;
    }
    let letterMorseCode = "";
    for (let j = 0; j < letterNumCode.length; j += 2) {
      const code = letterNumCode.slice(j, j + 2);
      if (code === "10") {
        letterMorseCode += ".";
      } else if (code === "11") {
        letterMorseCode += "-";
      }
    }
    result += MORSE_TABLE[letterMorseCode];
  }
  return result;
}

module.exports = {
  decode,
};
