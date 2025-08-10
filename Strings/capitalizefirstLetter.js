
let str = 'qwerty';

function capitalizeFirstSkipSpecial(str) {
    if (str.length === 0) return str;

    let result = '';
    let foundLetter = false;

    for (let i = 0; i < str.length; i++) {
        let code = str[i].charCodeAt(0);

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