let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
let result = [ ];

function sumOfTwoArrays(arr1,arr2){
    for (let i = 0; i < arr1.length; i++) {
        result[i] = arr1[i] + arr2[i]; // sum of rows
        
    }
    return result;
}

console.log(sumOfTwoArrays(arr1,arr2));