// let str = "qwertyuiop";
let str = 'HelloWorld';

let vowels = 0;
let  consonants = 0;

function consonantVowelDiff(str){

    if(str.length === 0){
        console.log(`String is an empty`);
        return { vowels, consonants, difference: 0 };
    }
for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

    // Check if letter (A-Z or a-z)
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            if (
                code === 65 || code === 69 || code === 73 || code === 79 || code === 85 || // capital vowels
                code === 97 || code === 101 || code === 105 || code === 111 || code === 117 // small vowels
            ) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }
 
return {consonants,vowels,difference: consonants-vowels}; // difference
}

let result = consonantVowelDiff(str);

console.log(`Vowels: ${vowels}, Consonants: ${consonants}, Difference: ${result.difference}`);