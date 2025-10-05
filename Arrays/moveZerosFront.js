function moveZeroFront(arr) {
    let n = arr.length;
    let j = n - 1;

    // first find non-zeros elements
    for (let i = n - 1; i >= 0; i--) {
        if (arr[i] !== 0) {
            arr[j] = arr[i];
            j--;
        }
    }

    while (j >= 0) {
        arr[j] = 0;
        j--;
    }
    return arr;
}
function main() {
    let arr = [1, 2, 0, 4, 3, 0, 5, 0];
    console.log(moveZeroFront(arr));

}
main();