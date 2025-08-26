let matrix = [[2, 1],
              [7, 4]];

function inverse2x2(matrix){
    // extract elements
    let a = matrix[0][0];
    let b = matrix[0][1];
    let c = matrix[1][0];
    let d = matrix[1][1];

    let det = a*d - b*c; 

    if(det === 0){
        return "Inverse does not exist (det =0 )";
    }
    // apply formula

    let inverse = [
        [d/det, -b/det],[-c/det,a/det]
    ];
    return inverse;
}

console.log(inverse2x2(matrix));