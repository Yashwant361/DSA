
function checkEvenAndOdd(num) {
    let evenSum = 0;
    let oddSum = 0;

    while (num > 0) {
        let rem = num % 10;
        if (rem % 2 == 0) {
            evenSum += rem;
        }
        else {
            oddSum += rem;
        }
        num = Math.trunc(num / 10);
    }
    return evenSum === oddSum; // boolean return

}

function main() {
    let num = 123456789;
    let res = checkEvenAndOdd(num);
    //  if(res){
    //     console.log("yes");
    //  }
    //  else
    //     console.log("no");
    console.log(res);
}
main()