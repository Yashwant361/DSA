// Count Unique and Duplicate Elements in an Array

/* output

count Unique: 0, 2  // 2 times
count duplicate : 9,8,7,4 // 4 times

*/

let arr = [9, 8, 7, 9, 8, 4, 7, 2, 4, 0];
let N = arr.length;

//PART1 : Count Unique --> sort first Using bubble sort

function countUnique(arr) {
     let Unique = 0 ;
    for (let i = 0; i <= N - 1; i++) {
        for (let j = 0; j < N - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                
            }
           
        }

    }
    return Unique;
}

console.log(`Unique elements: `,countUnique(arr));

// PART 2 : Duplicate Elements

function countDuplicate(arr) {
    countUnique(arr); // sort first

    //  let Unique = 0 ;
    let duplicateCount = 0;

    let i = 0;
    while (i < N - 1) {
        if (arr[i] === arr[i + 1]) {
            duplicateCount++; // found duplicate , now skip all the same values
            let current = arr[i];
            while (i < N && arr[i] === current) {
                i++;
            }
        }
        else {
            i++;
        }
    }
    return duplicateCount;
}


// console.log(`Unique elements: `,countUnique(arr));
console.log(`Duplicate Count: `, countDuplicate(arr));