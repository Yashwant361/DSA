let str = "Hello World";
let result = ' ';
function removeChar(str,charToRemove){
    

    for (let i = 0; i < str.length; i++) {
       if(str[i] !== charToRemove){
        result += str[i];
       }
        
    }
    return  result;
}

console.log(removeChar(str,'e'));