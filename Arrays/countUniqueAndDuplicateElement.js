let arr = [9, 8, 7, 9, 8, 4, 7, 2, 4, 0];
let N = arr.length;

// PART 1: Count Unique --> sort first using bubble sort
function countUnique(arr) {
    // Bubble sort
    for (let i = 0; i < N - 1; i++) {
        for (let j = 0; j < N - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    // Count unique elements after sorting
    let uniqueCount = 0;
    for (let i = 0; i < N; i++) {
        if (i === 0 || arr[i] !== arr[i - 1]) {
            uniqueCount++;
        }
    }
    return uniqueCount;
}

// PART 2: Duplicate Elements Count
function countDuplicate(arr) {
    countUnique(arr); // Sort first

    let duplicateCount = 0;
    let i = 0;
    while (i < N - 1) {
        if (arr[i] === arr[i + 1]) {
            duplicateCount++; // Found a duplicate
            let current = arr[i];
            while (i < N && arr[i] === current) {
                i++; // Skip all duplicates of this number
            }
        } else {
            i++;
        }
    }
    return duplicateCount;
}

console.log(`Unique elements:`, countUnique(arr));
console.log(`Duplicate Count:`, countDuplicate(arr));
