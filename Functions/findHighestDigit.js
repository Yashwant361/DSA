function highestDigit(num) {
    let max = num % 10;

    while (num > 0) {
        let rem = num % 10;
        if (max < rem) {
            max = rem;
        }
        num = Math.trunc(num / 10);
    }
    return max;
}

function main() {
    let num = 32415;
    let res = highestDigit(num);
    console.log(`${res} is highest digit of number ${num}`);
}
main();