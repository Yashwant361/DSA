// Given an integer array, find a maximum product of a triplet in the array.

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(`Sorted array ${arr} \n`);
}
function maxProdTriplet(arr) {
    let n = arr.length;
    bubbleSort(arr);
    let prod1 = arr[n - 1] * arr[n - 2] * arr[n - 3];
    let prod2 = arr[0] * arr[1] * arr[n - 1];

    return Math.max(prod1, prod2);
}
function main() {
    // let arr = [10, 3, 5, 6, 20];
    // let arr = [-10, -3, -5, -6, -20];
    let arr =  [1, -4, 3, -6, 7, 0];
    console.log(maxProdTriplet(arr));
}
main();