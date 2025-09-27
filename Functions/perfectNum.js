/*
a positive integer equal to the sum of its proper positive divisors.
28(1, 2, 4, 7, 14) .
 Sum: 1 + 2 + 4 + 7 + 14 = 28.
*/
function perfectNum(num) {
    let temp = num;
    let sum = 0;
    for(let i = 1 ; i < num ; i++) {
        if(num%i===0){
            sum+=i;
        }
    }
    return sum===temp;

}
function main() {
    let num = 28;
    let res = perfectNum(num);
    console.log(res);

}
main()