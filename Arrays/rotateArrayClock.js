function reverse(arr, start, end) {
    while (start < end) { // ✅ swap till start < end
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }
}
function rotateArray(arr, d) {
    let n = arr.length;
    d = d % n;

     // Step1: reverse last d elements
    reverse(arr, n - d, n - 1);

    // Step2: reverse first n-d elements
    reverse(arr, 0, n - d - 1);

    // Step3: reverse entire array
    reverse(arr, 0, n - 1);

    return arr;
}

function main() {
    let arr = [1, 2, 3, 4, 5, 6];
    let d = 2;
    console.log(rotateArray(arr, d));
}
main();