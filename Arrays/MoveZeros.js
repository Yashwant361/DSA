/* Approach (Step-by-Step)
-----------------------------
Step 1: Initialize variables.
Step 2: Find first zero index.
Step 3: Move all non-zero elements ahead of zeros.
Step 4: Return final array.

*/


function moveZeros(arr) {
    let n = arr.length;
    let j = -1; // j will store the position of the zeros in the array.

    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            j = i;
            break;
        }
    }
    // if there’s no zero in array, return as it is
    if (j === -1) return arr;

    // now , move all non-zero elements ahead of zeros

    for (let i = j + 1; i < n; i++) {
        if (arr[i] !== 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            j++; // move pointer forward
        }
    }
    return arr;
}
function main() {
    // let arr = [0, 0];
    // let arr = [10, 20, 30];
    let arr = [1, 2, 0, 4, 3, 0, 5, 0];

    console.log(moveZeros(arr));

}
main();