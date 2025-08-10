
let str = 'qwerty';


function capitalizeFirst(str){


    if(str.length === 0){
        return str; // Base case
    }

  // Extract first letter
    let firstChar = str[0];
    let code = firstChar.charCodeAt(0); //charCodeAt() takes a position in the string, not an ASCII value.
   
// If first char  is lowercase(a-z)
if(code >=97 && code <=122){
    firstChar = String.fromCharCode(code-32);
}

// Cpoy rest of String (Except First letter)

let rest = '';
for (let i = 1; i < str.length; i++){
    rest += str[i];
}
     return firstChar + rest;

}

console.log(capitalizeFirst(str));