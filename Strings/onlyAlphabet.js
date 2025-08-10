let str = 'qwerty123';

let isAlpbhabetic = true;

function onlyAlpha(str){
    for(let i = 0 ; i < str.length; i++){
        let code = str.charCodeAt(i);
        if(!(code >= 65 && code <= 90) && !(code >= 97 && code <=122)){
            isAlpbhabetic = false;
            break;
        }
    }
    return isAlpbhabetic;
}
console.log(onlyAlpha(str));