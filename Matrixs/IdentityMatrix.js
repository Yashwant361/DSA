let matrix = [[1, 0, 0],
[0, 1, 0],
[0, 0, 1]
];

function IdentityMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].length !== matrix.length) {
            return false; // check matrix is square
        }

    for (let j = 0; j < matrix.length; j++) {
        if (i ===j && matrix[i][j] !==1){
            return false; // diagonal not 1
        }
        if (i !==j && matrix[i][j] !==0) {
         return false; // non-diagonal not 0
        }
        
     }
    }
    return true;

}            
console.log(IdentityMatrix(matrix));