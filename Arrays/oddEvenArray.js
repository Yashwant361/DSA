let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

let evenArr = [];
let oddArr  = [];

// since we are not using .push(), we need to manually track where to insert each value.
let oddIndex  = 0;
let evenIndex = 0; 

 for(let i = 0 ; i < arr.length ; i++){
    if( arr[i] % 2 === 0){
        evenArr[evenIndex] = arr[i];
        evenIndex++;
    }
    else{
        oddArr[oddIndex] = arr[i];
        oddIndex++;
    }
 }

 console.log("Odd elements:", oddArr);
 console.log("Even elements:", evenArr);