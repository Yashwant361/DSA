let str = "qwertyuiop";
// let str = 'HelloWorld';

let result = '';

function swapCase(str){

    if(str.length === 0){
        console.log(`String is an empty`);
        return str;
    }
for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

    // upperCase
    if(code >=65  && code <= 97){
        result += String.fromCharCode(code+32);
    }
    //lower Case
    else if(code >= 97 && code <= 122){
        result += String.fromCharCode(code-32);
    }

    // None-alphabet character remains same
    else{
        result += str[i];
    }
}
return result;
}

console.log(swapCase(str));