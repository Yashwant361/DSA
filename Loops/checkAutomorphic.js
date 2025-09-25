
/**
  num = 5 => num*num = 25;
  last_digit of sqr num === given_num
                       5===5
 */

let num = 5;
let temp = num;

if (num === 0 || num === 1) {
    console.log(num + " is an automorphic nnumber")
}
else if (num < 0) {
    console.log(num + " is not an automorphic number")
}
else {
    let sqr = num * num;
    let i = 1;

    // count digit of num
    while (num > 0) {
        i = i * 10;
        num = Math.trunc(num / 10);
    }

    //check last digits
    if (sqr % i === temp) {
        console.log(temp + " automorphic number")
    }
    else {
        console.log(temp + " is not an automorphic number")
    }
}