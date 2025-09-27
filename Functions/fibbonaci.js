
function fibonacci(a, b) {
    let sum;
    for (let i = 1; i <= 10; i++) {
        sum = a + b // 1
        console.log(a); //1
        a = b; //a=1
        b = sum; // b=1
    }
    return sum;

}
function main() {
    let a = 0;
    let b = 1;
    let res = fibonacci(a, b);
    console.log(res);

}
main();