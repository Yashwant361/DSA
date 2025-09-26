
function checkSpy(num) {
    let sum = 0;
    let prod = 1;
    while (num > 0) {
        let rem = num % 10; // return last digit 
        sum += rem; 
        prod *= rem; 
        num = Math.trunc(num / 10);
    }
     console.log(sum, prod);

    // return sum , prod; //unfortunately, you cannot return two separate values directly like return sum, prod;
    return sum === prod; 
    /* === is the strict equality operator in JavaScript.
    It compares two values (sum and prod) for equality and type.
    Result: always a boolean → true or false. */

}
// console.log(checkSpy(11));

function main() {
    let num = 11; // 1
    let isSpy = checkSpy(num);
    if (isSpy) {
        console.log("yes")
    }
    else {
        console.log("No, not a Spy Number");
    }
}
main(); // call function