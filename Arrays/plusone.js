function plusOne(arr) {
    let n = arr.length;
    let carry = 1;

    for (let i = n - 1; i >= 0; i--) {
        let sum = arr[i] + carry;
        arr[i] = sum % 10;
        carry = Math.floor(sum / 10);

    }
    if (carry === 1) {
        let res = new Array(n + 1);
        res[0] = 1;
        for (let i = 0; i < n; i++) {
            res[i + 1] = arr[i];

        }
        return res;
    }
    return arr;
}
function main() {
    let arr = [1, 2, 4];
    console.log(plusOne(arr));
}
main();