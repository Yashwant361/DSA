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


// let arr = [9,8,6,2];
// let arr = [1, 4, 3, 2, 6, 5];
// let arr = [4, 5, 1, 2];
let arr = [8, 2, 3, 4, 5, 6, 7, 1];

function reverseArray(arr) {
    let firstPointer = 0; 
    let lastPointer = arr.length - 1; 

    for (let i = 0; i < arr.length; i++) {
        if (firstPointer < lastPointer) {
            let temp = arr[firstPointer]; 
            arr[firstPointer] = arr[lastPointer]; 
            arr[lastPointer] = temp; 
        }
        firstPointer++;
        lastPointer--;
    }
    return arr;
}
console.log(reverseArray(arr))