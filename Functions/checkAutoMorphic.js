/**
 step1 : take number  = 5;
 step2 : make square of number = 25;
 step3 : took last digit and compare with original number
 */

function checkAutoMorphic(num) {
    // let temp = num;
    let sqr = Math.pow(num, 2); //25

    while (num > 0) {
        // let rem = sqr%10;
        // if(rem===num){
        //     return true;
        // }
        // else
        //     return false;

        if (sqr % 10 !== num % 10) {
            return false;
        }
        sqr = Math.trunc(sqr / 10);
        num = Math.trunc(num / 10);
    }
    return true;
}

function main() {
    // let num = 25;
    let num = 4;
    let res = checkAutoMorphic(num);
    if (res) {
        console.log("yes!!")
    }
    else
        console.log("No")
}
main();