let matrix = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];

function printZigZag(matrix){
    for (let i = 0; i < matrix.length; i++) {
        let row = " ";
        if (i % 2==0) {
            for (let j = 0; j < matrix[0].length; j++) {
                row += matrix[i][j] + " ";   
            }
        }else{
            for (let j = matrix[0].length-1; j >=0; j--) {
               row+= matrix[i][j] + " ";
                
            }
        }
        console.log(row);
    }
    
}
printZigZag(matrix);