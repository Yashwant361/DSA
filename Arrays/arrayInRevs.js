//  let arr = [9,8,6,2];

// for(let i = arr.length-1 ; i >= 0  ; i--){
//    console.log(arr[i], i);
// }
// console.log("------------")
// let i = arr.length-1
// while(i>=0){
//     console.log(arr[i],i);
//     i--;
// }
// // i--;


let arr = [9,8,6,2];

let firstPointer = 0;
let lastPointer = arr.length-1;
for (let i = 0; i < arr.length; i++) {
    if(firstPointer < lastPointer){
        let temp = arr[firstPointer];
        arr[firstPointer]= arr[lastPointer];
        arr[lastPointer] = temp;
    }
    firstPointer ++;
    lastPointer--;
    
}
console.log(arr)