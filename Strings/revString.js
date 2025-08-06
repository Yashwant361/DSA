let str = "Hello World";

function reverseString(str){
    let result = " ";
    for (let i = str.length-1 ; i >=0; i--) {
        result +=str[i];
        
    }
    return result;
}
console.log(`Reverse String is : `, reverseString(str));