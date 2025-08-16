let str = "The quick brown fox jumps over the lazy dog";

function checkAllString(str) {

    //Array to track letters a-z
    let alphabet = [];
    for (let i = 0; i < 26; i++) {
        alphabet[i] = 0; // 0 = not seen yet
    }

    //loop through string
    for (let i = 0; i < str.length; i++) {
        let code = str[i].charCodeAt(0);

        //convert uppercase to lowercase
        if(code >= 65 && code <= 90){
            code = code + 32; // 'A' -> 'a'
        }

        //if character is a --> z
        if(code >= 97 && code <= 122){
            let index = code -97; // a->0 , b-> 1,....,z->25
            alphabet[index] =1; // mark as seen
        }
        
    }
    //check if any letter is missing
    for(let i = 0 ; i < 26 ; i++){
        if(alphabet[i] === 0){
            return false;// missing a letter
        }
    }
    return true; // all letters found

}
console.log(checkAllString(str));