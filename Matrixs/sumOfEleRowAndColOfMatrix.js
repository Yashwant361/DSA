let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

function sumRowEle(matrix){
    let sum = 0 ;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
           sum += matrix[i][j];
            
        }
        
    }
    return sum;
}

function sumColEle(matrix){
    let Sum = 0 ;
    for (let j = 0; j < matrix[0].length; j++) {   // ✅ outer loop → columns
        for (let i = 0; i < matrix.length; i++) {  // ✅ inner loop → rows
           Sum += matrix[i][j];
        }
    }
    return Sum;
}

console.log(`Sum of Row Elements:` ,sumRowEle(matrix)); // excepted output : 45
console.log(`Sum of Col Elements:` ,sumColEle(matrix)); // excepted output : 45
