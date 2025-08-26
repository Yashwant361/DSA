let matrix = [[5,0,0],
              [0,0,0],
              [0,5,0]];

 function spareMatrix(matrix){
    let zeroCount = 0 , nonZeroCount =0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                zeroCount++;
            }
            else
                nonZeroCount++;
        }
        
    }
    return zeroCount > nonZeroCount;
 }             

 console.log(spareMatrix(matrix));