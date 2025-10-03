function moveZeros(arr) {
    let n = arr.length

    // start with the first position
    let fp = 0;

    // fill all non-zero numbers
    for (let i = 0; i < n; i++) {
        if (arr[i] !== 0) {
            arr[fp] = arr[i];
            fp++;
        }
    }
    // fill the rest with zeros
    while (fp < n) {
        arr[fp] = 0;
        fp++;
    }
    return arr;
}
let arr = [0, 1, 5, 0, 12, 9, 0];
console.log(moveZeros(arr));