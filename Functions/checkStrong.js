/**
 * Problem breakDown:-
 step1 : take num = 145
 step2: find factorial of each digits
 step3: add sum of factorials
 step4: compare step3 with step1
  --------------------------------
  Algorithms:
  step1: find first last digit
  step2: find factorial of step1
  step3: sum with factorial
  step4: remove last digits
 */

function checkStrong(num) {
    let temp = num;
    let sum = 0;
    while (num > 0) {
        let rem = num % 10; // last digit

        // calculate factorial of last digit
        fact = 1;
        for (let i = 1; i <= rem; i++) {
            fact *= i;
        }
        
        sum += fact; // add factorial to sum
        num = Math.trunc(num / 10); // remove the last digit here
    }
    console.log(sum, temp);
    return sum === temp;
}
function main() {
    let num = 145;
    let res = checkStrong(num);
    console.log(res);
}
main();