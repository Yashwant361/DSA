arr = [3, 5, 2, 8, 11];
let target = 10

function hasPairWithSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return true; // or return [arr[i] , arr[j]]
            }
        }
    }
    return false;
}
console.log(hasPairWithSum(arr,target));