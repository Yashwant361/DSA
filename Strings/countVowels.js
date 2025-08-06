let str = "Hello World";

function countVowels(str){
    let count = 0;
    for(let i = 0 ; i<str.length ; i++){
        let ch = str[i];

    if(ch >= 'A' && ch <= 'a'){
        ch=String.fromCharCode(str.charCodeAt(i)+32);
    }

    if(ch === 'a' ||ch === 'e' ||ch === 'i' ||ch === 'o' ||ch === 'u'){
        count++;
    }
}
return count;
}

console.log(`Total Vowels: `,countVowels(str));