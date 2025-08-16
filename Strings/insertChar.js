 let str = "hello";

// function insetChar(str, charToInsert,position){
//     let result = ' ';

//     for (let i = 0; i <= str.length; i++) {
//         if(i === position){
//             result += charToInsert; // insert character at desired position
//         }
//         if( i< str.length){
//             result += str[i]; // add original character
//         }
//     }
//     return result;
// }
// console.log(insetChar(str,'X',0));

function removeChar(str,position){
    let result = ' ';

    for (let i = 0; i < str.length; i++) {
        if( i !== position){
            result += str[i]; // skip  the character at 'position';
        }
        
    }
    return result;
}
console.log(removeChar(str,0));