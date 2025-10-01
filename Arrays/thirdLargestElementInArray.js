
// let arr = [1, 14, 2, 16, 10, 20];
let arr = [19, -10, 20, 14,2, 16, 10];

function thirdLargestElement(arr) {
    let n = arr.length;
    let largest = -1;// 20
    let secLargest = -1;
    let thirdLargest = -1;

    // find the largest elements
    for (let i = 0; i < n; i++) {
        if (arr[i] > largest) {
            thirdLargest = secLargest;
            secLargest = largest;
            largest = arr[i];
        }
        // find SecLargest elements
        else if (arr[i] > secLargest && arr[i] < largest) {
            // thirdLargest = secLargest
            secLargest = arr[i];
        }
        else if (arr[i] > thirdLargest && arr[i] < secLargest) {
            thirdLargest = arr[i];
        }
    }
    return thirdLargest;
}

console.log(thirdLargestElement(arr));