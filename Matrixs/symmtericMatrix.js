// let matrix = [
//   [1, 2, 3],
//   [2, 5, 6],
//   [3, 6, 9]
// ];
let matrix = [
  [1, 0, 3],
  [2, 5, 6],
  [3, 6, 9]
];
// check if symmetric square
function isSymmetry(matrix){
for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].length !== matrix.length) {
        return false; // this return , Not a square matrix
    }
    //check symmetry
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] !== matrix[j][i]) {
                return false; //Mismatch found
            }
            
        }
    }
    return true;
}
}
console.log(isSymmetry(matrix));