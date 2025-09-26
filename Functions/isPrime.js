


function isPrime(num) {
    let flag = true;

    if (num <= 1) {
        console.log("Not prime")
    }
    else {
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                flag = false;
                break;
            }
        }

        // if (flag) {
        //     console.log("Yes")
        // }
        // else {
        //     console.log("NO")
        // }
    }
    return flag;
}

function main() {
    let num = 2;
    let res = isPrime(num);
    console.log(res);
}
main();