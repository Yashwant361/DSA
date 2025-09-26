
function checkNeon(num){
    let sqr = Math.pow(num,2); //81
    let sum = 0;
    let prod= 1;
    while(num>0){
        let rem = sqr%10;
        sum+=rem;
        prod+=rem
        num  = Math.trunc(num/10);
    }
    return [sum === prod];
}
function main(){
    let num = 9;
    let res = checkNeon(num);
    if(res){
        console.log("yes")
    }
    else{
        console.log("no")
    }
    // console.log(res);

}
main();