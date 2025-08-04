let arr = [1, 3, 7, 8, 7, 5, 6, 7];

let target = 7;
let count =  0; // trace the target frequency

for(let i = 0 ; i<= arr.length-1 ; i++){
    if(arr[i] === target){
        count++;
    }
}
console.log(`Target ${target} appears ${count} times.`);