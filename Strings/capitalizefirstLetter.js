
let str = 'qwerty';

function capitalizeFirstSkipSpecial(str) {
    if (str.length === 0) return str;

    let result = '';
    let foundLetter = false; //"I haven’t found the first lowercase letter to capitalize yet."

    for (let i = 0; i < str.length; i++) {
        let code = str[i].charCodeAt(0); //Get the Unicode of the first character

        if (!foundLetter && code >= 97 && code <= 122) {
            // Convert lowercase to uppercase
            result += String.fromCharCode(code - 32);
            foundLetter = true;
        } else {
            result += str[i];
        }
    }

    return result;
}

console.log(capitalizeFirstSkipSpecial(str)); // "#Qwerty"