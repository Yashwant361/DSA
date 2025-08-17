let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];


function sumOfTwoArraysColsWise(arr1,arr2){
    let result = [];
   for (let i = 0; i < arr1.length; i++) {
    result[i] = arr1[i] + arr2[i];
    
   }
   return result;
}

console.log(sumOfTwoArraysColsWise(arr1,arr2));