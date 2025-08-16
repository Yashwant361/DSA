let maxtrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

function printRowMatrix(maxtrix){
    let result = [];
    for (let i = 0; i < maxtrix.length; i++) {
        let row = []
       for (let j = 0; j < maxtrix[i].length; j++) {
         row.push(maxtrix[i][j]);
       }
       result.push(row);
        
    }
    return result;
}

function printColMatrix(maxtrix){
    let result = [];
    for (let j = 0; j < maxtrix[0].length; j++) {
        let col = []
       for (let i = 0; i < maxtrix.length; i++) {
         col.push(maxtrix[i][j]);
       }
       result.push(col);
        
    }
    return result;
}


console.log(`Row-wise:`,printRowMatrix(maxtrix)); // call function
console.log(`Col-wise:`,printColMatrix(maxtrix)); // call function