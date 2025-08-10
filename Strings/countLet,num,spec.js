// let str = '#qwerty123';
let str = "Hello123@#";
// let str = '';

function countTypes(str) {

    let letters = 0;
    let digits = 0;
    let special = 0;

    if (str.length === 0) {
        console.log(`String is empty`);
        return { letters, digits, special };

    }
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);

        //letters

        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            letters++
        }

        // numbers

        else if ((code >= 48 && code <= 57)) {
            digits++;
        }
        else {
            special++
        }
    }
    return { letters, digits, special };
}

let result = countTypes(str);

console.log(result);


/**
  charCode vs charCodeAt 
  ------------------------------------------
  1. charCodeAt()
  ==>What it does: Takes a position (index) in a string and gives you the numeric
  eg: 
  let str = "A";
  console.log(str.charCodeAt(0)); // 65  (ASCII code for 'A')
-----------------------------------------------
  2. fromCharCode()
==>What it does: Takes one or more numeric ASCII/Unicode values and returns the character(s) for them.
  eg:
 
 */