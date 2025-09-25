/**
  spin number 

  num = 6 
  factor(6) = 1,2,3
  sum of factors = 1+2+3 = 6
  product of factors = 1*2*3 =6

  sum(product) === sum(factors), hence spin number

 */

let num = 6;
let prod = 1;
let sum = 0;

for (let i = 1; i <=  num/2; i++) {
    if (num % i === 0) {
        sum += i;
        prod *= i;
    }
}
if (sum === prod) {
    console.log(num + " is spy number")
}
else {
    console.log(num + " is not spy number")
}
