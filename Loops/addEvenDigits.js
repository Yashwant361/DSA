/*
let num = 12345
sum(evenNum) = 2+4 =6

*/

// let num = 12345;
let num = 678910;
let evenSum = 0;

while (num > 0) {
    let rem = num % 10;
    if (rem % 2 === 0) {
        evenSum += rem;

    }
    num = Math.trunc(num / 10)
}
console.log(evenSum)
