// let str = "I am groot";
let str = "   Hello   world  this is   pointer version  ";

function countWord(str){
    let count = 0;
    let i = 0;
    let n = str.length;


    while( i < n){
        //skip spaces
        while( i < n && str[i] === ' '){
            i++;
        }
        // if we're still inside string, it means word start
        if(i < n){
            count++;

            // move untill end of the word
            while( i < n && str[i] !== ' '){
                i++;
            }
        }
    }
    return count;
}
console.log(countWord(str));

/*
let str = "Hello world";
let count = 0;
let inWord = false;

for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && !inWord) {
        inWord = true;
        count++;
    } else if (str[i] === " ") {
        inWord = false;
    }
}

*/