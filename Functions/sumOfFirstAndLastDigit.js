/**
 sum of last and first digit of number
 12345 => 1 + 5 = 6
 
 */
function sum(num) {
    let sum = 0;

    let rem = num % 10; //5

    sum += rem; //0+5=5

    while (num > 9) {
        num = Math.trunc(num / 10); //1
    }
    // let totalSum = sum + num;
    
    return sum + num;
}
function main() {
    let num = 56789;
    let res = sum(num);
    console.log(res);

}
main();