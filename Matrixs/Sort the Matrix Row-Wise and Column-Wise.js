let mat = [
    [4, 2, 1],
    [9, 6, 3],
    [7, 5, 8]
];

function bubbleSort(arr){
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
           if (arr[j] > arr[j+1]) {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1]=temp;
            
           }
        }
        
    }
    return arr;
}
function sortMatrix(matrix){
    let rows = matrix.length;
    let cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        matrix[i] = bubbleSort(matrix[i]);
        
    }
    for (let i = 0; i < rows; i++) {
        matrix[i] = bubbleSort(matrix[i]);
        
    }

    for (let j = 0; j < cols; j++) {
        let colArr = [];
        for (let i = 0; i < rows; i++) {
            colArr.push(matrix[i][j]);
            
        }

        colArr = bubbleSort(colArr);

        for (let i = 0; i < rows; i++) {
            matrix[i][j] = colArr[i];
            
        }
        
    }
  return matrix;
}

console.log("Before:");
console.log(mat);

console.log("After:")
console.log(sortMatrix(mat));