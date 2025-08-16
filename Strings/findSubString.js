// Problem Statement
// Given a string str and a substring sub, check if sub exists inside str.


let str = 'hello World';
let subStr = 'llo'

function findSubStr(str,subStr){
    let i = 0; // pointer for main str
    let j = 0; // pointer for subStr

    while( i < str.length){
        if(str[i] === subStr[j]){
            i++;
            j++;
            if(j === subStr.length){
                return i - j ; // found , return start index
            }
        }
        else{
            i = i-j+1; // reset i to next start
            j = 0 ;
        }
    }
     
    return -1; // not found

}

console.log(findSubStr(str,subStr));