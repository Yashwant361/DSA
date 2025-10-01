function reverseArrayInGroup(arr,k) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let fp = i;
        let lp = Math.min(i + k - 1, n - 1); // 2,7 -> 2

        while (fp < lp) {
            let temp = arr[fp];
            arr[fp] = arr[lp];
            arr[lp] = temp;

            fp++;
            lp--;
        }
    }
    return arr;

}
function main() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];
    let k = 3
    console.log(reverseArrayInGroup(arr,k))
}
main();