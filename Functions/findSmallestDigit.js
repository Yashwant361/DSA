
function smallestDigit(num){
    let min = num%10;

    while(num > 0){
        let rem = num%10;
        if(min > rem){
            min = rem;
        }
        num=Math.trunc(num/10);
    }
    return min;
}

function main(){
    let num = 32145;
    let res = smallestDigit(num);
    console.log(`${res} is smallest digit of number ${num}`);
}
main();