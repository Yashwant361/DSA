let str = 'qwerty';

let strArr = str.split('');// convert string into array

function revStr(strArr){
let orgStr = ' ' ; // store the reverse string

for (let i = str.length - 1; i >= 0; i--) {
    orgStr += strArr[i];

}
return orgStr;
}

let str1 = revStr(strArr);
console.log(`reverseStrng: `,str1);
console.log(`Original String: `, str);
