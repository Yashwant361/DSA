let str = 'JavaScript';

function getLastChar(str){
    //  let lastIndex = str.length-1; // math to find last position
     let lastChar = '';

     for (let i = str.length-1; i < str.length; i++) {
        lastChar = String.fromCharCode(str.charCodeAt(i));
        
     }
     return lastChar;
}
console.log(getLastChar(str));