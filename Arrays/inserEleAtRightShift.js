let arr = [10, 20, 30, 40, 50];

function insetAtX(arr,X,value){
    let N = arr.length;

    //Shift elements to the right
    // X is index
    for (let i = N; i > X ; i--) {
        arr[i] = arr[i-1];
    }

    //Insert Value
    arr[X] = value;

    return arr;
}

let inserted = insetAtX(arr,2,99);
console.log("After Insertion:", inserted);