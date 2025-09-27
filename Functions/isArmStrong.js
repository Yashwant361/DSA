function isArmStrong(num) {
    let temp = num;
    let n = num.toString().length;
    let sum = 0;

    while (num > 0) {
        let rem = num % 10;
        sum += Math.pow(rem, n); // ✅ raise digit to power n
        num = Math.floor(num / 10);
    }

    return sum === temp;
}

function main() {
    let nums = [371, 153, 9474, 123, 407, 0, 1, 9475];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        console.log(`${num} -> ${isArmStrong(num) ? "Armstrong" : "Not Armstrong"}`);
    }

}
main();