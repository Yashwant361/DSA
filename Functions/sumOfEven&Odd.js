function sumOfEvenDigit(num) {
    let sumEven = 0;
    let sumOdd = 0;

    while (num > 0) {
        let rem = num % 10;
        if (rem % 2 == 0) {
            sumEven+= rem;
        }
        else {
            sumOdd += rem;
        }
        num = Math.trunc(num/10)
    }
    return [sumEven,sumOdd];
}
function main() {
    let num = 123456789;
    let [sumEven,sumOdd] = sumOfEvenDigit(num);
    console.log(`Sum of even digits is ${sumEven} \nSum of odd digits is ${sumOdd}`);

}
main();
