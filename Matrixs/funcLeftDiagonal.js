let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function leftDiagonal(matrix){
    for (let i = 0; i < matrix.length; i++) {
        let row = " ";
        for (let j = 0; j < matrix.length; j++) {
           if(i == j){
            row += matrix[i][j] + " ";
           }else{
            row+= " O ";
           }
            
        }
        console.log(row);
    }
}
leftDiagonal(matrix);