//alphabet
const alphabets = "abcdefghijklmnopqrstuvwxyz";

//utility function
function isNotLetter(char) {
    return /[^a-zA-Z]/.test(char);
}

// caesar cipher func

function caesarCipher(string, shiftFactor) {

if(shiftFactor < 0) {
    throw new Error("Please enter a positive shift factor");
}

  let caesarCipherString = "";
  const arrayOfString = string.split("");

  arrayOfString.forEach((letter) => {
    let indexOfLetter = alphabets.indexOf(letter.toLowerCase());
    indexOfLetter = indexOfLetter + shiftFactor;

    if (indexOfLetter > alphabets.length - 1) {
      indexOfLetter = indexOfLetter - alphabets.length;
    }

    if(isNotLetter(letter) === true) {
        caesarCipherString =
        caesarCipherString + letter;
        return;
    }

    if (letter.toUpperCase() === letter) {
      caesarCipherString =
        caesarCipherString + alphabets[indexOfLetter].toUpperCase();
    } else {
      caesarCipherString = caesarCipherString + alphabets[indexOfLetter];
    }
  });
  return caesarCipherString;
}

export { caesarCipher };
