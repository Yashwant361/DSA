let arr = [10, 20, 30, 40, 50];

function deleteAtX(arr,X,value){
    let N = arr.length;

    //Shift elements to the right
    // X is index
    for (let i = X; i < N-1 ; i++) {
        arr[i] = arr[i+1];
    }
    // Remove last redundant element
    arr.length = N-1;

    return arr;
}

let  deleted = deleteAtX(arr,2);
console.log("After Insertion:", deleted);