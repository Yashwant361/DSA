/*
let num = 3122
odd number = 1,3
even even = 2,2

if(sum of evenNum === sum of oddNum);


*/
let num = 3122;
let temp = num;
let oddNum = 0;
let evenNum = 0; 

while(num>0){
    let rem = num%10;
    if(rem % 2 ==0){
        evenNum += rem;
    }
    else{
        oddNum += rem;
    }
    num = Math.trunc(num/10);
}
if(evenNum == oddNum){
    console.log("Yes!, it's equal")
}
else
    console.log("Not, it's not")