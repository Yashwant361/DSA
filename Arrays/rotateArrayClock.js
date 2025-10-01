function reverse(arr, start, end) {
    while (start > end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        
        start++;
        end--;
    }
}
function rotateArray(arr, d) {
    let n = arr.length;
    d = n % d ;

    //Step1: reverse first d elements [1,2,3]
    reverse(arr,d - 1,0);


    // Step2: reverse remaining elements[4,5,6]
    reverse(arr, n - 1,d);

    //Step3: reverse enitre array
    reverse(arr, n - 1,0)

    return arr;
}
function main() {
    let arr = [1, 2, 3, 4, 5, 6];
    let d = 2;
    console.log(rotateArray(arr, d));
}
main();