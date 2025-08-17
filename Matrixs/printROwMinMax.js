let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function rowMinMax(matrix){
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        let maxVal = row[0];
        let minVal = row[0];

        for (let j = 1; j < row.length; j++) {
            if (row[j] > maxVal) maxVal = row[j];
            if (row[j] < minVal) minVal = row[j];
        }
        console.log(`Row ${i} -> Min = ${minVal} , Max = ${maxVal}`);
    }
}


function ColsMinMax(matrix){
    for (let j = 0; j < matrix[0].length; j++) {
        let maxVal = matrix[0][j];
        let minVal = matrix[0][j];

        for (let i = 1; i < matrix.length; i++) {
            if (matrix[i][j] > maxVal) maxVal = matrix[i][j];
            if (matrix[i][j] < minVal) minVal = matrix[i][j];
        }
        console.log(`Col ${j} -> Min = ${minVal} , Max = ${maxVal}`);
    }
}

rowMinMax(matrix);
console.log(`-------------------------`);
ColsMinMax(matrix);
