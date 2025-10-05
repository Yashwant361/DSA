function maxConsecBits(arr) {
    let n = arr.length;

    let maxCount = 0;
    let count = 1;

    for (let i = 0; i < n; i++) {
        if (arr[i] === arr[i - 1]) {
            count++;
        }
        else {
            maxCount = Math.max(maxCount, count);
            count = 1;
        }
    }

    return Math.max(maxCount, count);
}
function main() {
    let arr = [0, 0, 1, 0, 1, 0];
    console.log(maxConsecBits(arr));

}
main();