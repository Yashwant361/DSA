function maxConsecZeros(arr) {
    let n = arr.length;

    let maxCount = 0;
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            count++;
        }
        else {
            count = 0;
        }
        maxCount = Math.max(maxCount, count);
    }

    return maxCount;

}
function main() {
    let arr = [0, 0, 1, 0, 1, 0];
    // let arr = [0, 0, 0, 0];
    console.log(maxConsecZeros(arr));

}
main();