let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function printBoundary(matrix){
    for (let i = 0; i < matrix.length; i++) {
        let row = " ";
        for (let j = 0; j < matrix.length; j++) {
            if (i == 0 || i == matrix.length -1 || j == 0 || j == matrix.length -1   ) {
                row += matrix[i][j] + " ";
            }
            else{
                row += "0 "
            }
            
        }
        console.log(row);
        
    }
}
printBoundary(matrix);