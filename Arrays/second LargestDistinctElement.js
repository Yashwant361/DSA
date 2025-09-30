

function getSecondLargest(arr) {
    let n = arr.length;

    let largest = -1, secLargest = -1;

    //find the largest element of array
    for (let i = 0; i < n; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }

        // find the secondLargest element of array
        else if (arr[i] > secLargest && arr[i] < largest) {
            secLargest = arr[i];
        }
    }
    return secLargest;

}
// let arr = [12, 35, 1, 10, 34, 1];
// let arr = [10, 5, 10];
let arr = [10, 10, 10];
console.log(getSecondLargest(arr));