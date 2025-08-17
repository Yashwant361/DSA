let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function rowMinMax(matrix){
    for (let i = 0; i < matrix.length; i++) {

        //every new row starts fresh, with maxVal and minVal reset to the first element of that row.
        let row = matrix[i]; // pick one row
        let maxVal = row[0]; // assume first elements is Max
        let minVal = row[0]; // assume first elements is Min

        for (let j = 1; j < row.length; j++) {
           if (row[j] > maxVal) {
             maxVal = row[j]; // update max
           }
           if (row[j] < maxVal) {
             minVal = row[j]; // update max
           }
            
        }
        console.log(`Row ${i} -> Min = ${minVal} ,Max = ${maxVal}`);
        
    }
}
rowMinMax(matrix);