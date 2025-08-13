let str = "banana";


function removeChar(str, charToRemove) {

    let result = ' ';
    let removed = false;

   for (let i = 0; i < str.length; i++) {
    if (str[i] === charToRemove && !removed) {
      removed = true; // skip only once
      continue;
    }
    result += str[i];
  }

  return result;
}

console.log(removeChar(str, 'a'));