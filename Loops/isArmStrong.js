/**
  153 = 1*1*1=1
        3*3*3=27
        5*5*5= 125
        ----------
              153
    153 === 153 hence armstrong          
 
 */


let num = 153;
let sum = 0;
let digit= Math.trunc(Math.log10(num)+1); // length of given num
let temp = num;

while (num > 0) {
    let rem = num % 10;
    // let cube = rem * rem * rem;
    // sum += cube;
    sum+=Math.pow(rem,digit); // digit ^ length
    num = Math.trunc(num / 10);
}

if (temp === sum) {
    console.log(sum + " Is ArmStrong Number")
}
else {
    console.log(sum + " Is Not ArmStrong Number")
}

