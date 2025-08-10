let str = "banana";

// let strArr = str.split('');

function deleteFirstChar(str){
 
    let revStr= ' ';
    for (let i = 1; i < str.length; i++) {
       revStr += str[i];
        
    }
    return revStr;
}

console.log(`Remove First Character from String:`,deleteFirstChar(str));