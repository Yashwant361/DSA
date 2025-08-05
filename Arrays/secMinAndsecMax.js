// Find the Second Maximum Element; if None, Print -1

let arr = [2, 4, 1, 5, 7];

function secMinAndsecMax(arr) {
    let N = arr.length;

    // Bubble Sort for sorting
    for (let i = 0; i < N - 1; i++) {
        for (let j = 0; j < N - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    //  Remove duplicate

    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if(unique.length ===0 || unique[unique.length-1] !== arr[i]){
            unique.push(arr[i]);
        }       
    }

    // Check if second min and second max exit
    let secondMin = unique.length >= 2 ? unique[1] : -1;
    let secondMax = unique.length >= 2 ? unique[unique.length -2 ]: -1;
    
    return {secondMin , secondMax};
}
let result = secMinAndsecMax(arr);

console.log(`Second Minimum element of array: ${result.secondMin}`);
console.log(`Second Maximum element of array: ${result.secondMax}`);


// let arr = [2, 4, 1, 5, 7];

// function secMinAndsecMax(arr) {
//     let N = arr.length;

//     // Bubble Sort for sorting
//     for (let i = 0; i < N - 1; i++) {
//         for (let j = 0; j < N - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//      return arr;
//   }
//   console.log(hasTrioWithSum(arr));
