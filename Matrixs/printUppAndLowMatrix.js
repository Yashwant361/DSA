let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function printUpper(matrix) {

    console.log("Upper Triangle:");
   for (let i = 0; i <  matrix.length; i++) {
        let row = "";
        for (let j = 0; j <  matrix.length; j++) {
            if (j >= i){
                 row += matrix[i][j] + " ";
            }
            else row += "0 ";  // replace with 0 for clear triangle view
        }
        console.log(row);
    }
}
    function printLower(matrix) {
    console.log("Lowwer Triangle");
    for (let i = 0; i <  matrix.length; i++) {
        let row = "";
        for (let j = 0; j <  matrix.length; j++) {
            if (i >= j){
                 row += matrix[i][j] + " ";
            }
            else row += "0 ";  // replace with 0 for clear triangle view
        }
        console.log(row);
    }
}

printUpper(matrix);
console.log();
printLower(matrix);

