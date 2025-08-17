let matrix1 = [
    [1, 2, 3],[4, 5, 6],[7, 8, 9]
];

let matrix2 = [
    [7, 8, 9],[4, 5, 6],[1, 2, 3]
];

function sumOfTwoMatrixs(matrix1, matrix2) {
    // let rows = matrix1.length;
    // let cols = matrix2[0].length;
    let result = [];

    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix2[0].length; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
            
        }
    }
    return result;
}
console.log(sumOfTwoMatrixs(matrix1, matrix2));


function subtractOfTwoMatrixs(matrix1, matrix2) {
    // let rows = matrix1.length;
    // let cols = matrix2[0].length;
    let result = [];

    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix2[0].length; j++) {
            result[i][j] = matrix1[i][j] - matrix2[i][j];
            
        }
    }
    return result;
}
console.log(subtractOfTwoMatrixs(matrix1, matrix2));