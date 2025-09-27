function fact(num) {
    fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i
    }
    return fact;
}
function main() {
    let res = fact(5);
    console.log(res);
}
main()