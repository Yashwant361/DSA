let arr = [2, 4, 1, 5, 7];

function MinAndMax(arr) {

    let Max = Number.MIN_SAFE_INTEGER;  // set smallest number
    let Min  = Number.MAX_SAFE_INTEGER; // set largest number

    for (let i = 0; i < arr.length; i++) {
        // code for maximum number
        if (arr[i] > Max) {
            Max = arr[i];
        }

        // code for Minimum number
        if (arr[i] < Min) {
            Min = arr[i];
        }
    }

    return { Max, Min }; // return both values as an object
}

let result = MinAndMax(arr);
console.log(`Maximum element of array: ${result.Max}`);
console.log(`Minimum element of array: ${result.Min}`);

