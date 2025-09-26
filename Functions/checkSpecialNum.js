function checkSpecial(num) {

    let sum = 0;
    let prod = 1;

    while (num > 0) {
        let rem = num % 10;
        sum += rem;
        prod *= rem;
        num = Math.trunc(num / 10);
    }
    let add = sum + prod;
    return add;
}

function main() {
    let num = 59;
    let temp = num;
    let res = checkSpecial(num);
    // if(res === temp)
    // {
    //     console.log("yes");
    // }
    // else{
    //     console.log("no");
    // }
    console.log(res === temp ? "Yes" : "No");
}
main();