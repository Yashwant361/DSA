let str = 'qwerty';

for (let i = 0; i < str.length; i++) {
   let char = str[i];
   let ascii = str.charCodeAt(i);
    console.log(`${char} -> ${ascii}`);
    // console.log(ascii);
}