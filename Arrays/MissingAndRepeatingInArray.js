function findTwoElement(arr) {
    let n = arr.length;
    let repeating = -1;

    // Mark visited indices by negating the value
    // at the target index
    for (let i = 0; i < n; i++) {
        let val = Math.abs(arr[i]);

        // If already negative, the number is repeating
        if (arr[val - 1] > 0) {
            arr[val - 1] = -arr[val - 1];
        } else {
            repeating = val;
        }
    }

    let missing = -1;

    // The index with a positive value corresponds 
    // to the missing number
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            missing = i + 1;
            break;
        }
    }

    return [repeating, missing];
}

// Driver Code
let arr = [3, 1, 3];
let ans = findTwoElement(arr);
console.log(ans[0], ans[1]);