let arr = [1, 3, 7, 8, 7, 5, 6, 7];

let target = 7;

function countOccurrence(arr, target) {
    let count = 0; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
}

let result = countOccurrence(arr, target);
console.log(`Target ${target} appears ${result} times.`);

// https://docs.google.com/forms/u/2/d/e/1FAIpQLSealDZztNWsgSiJ1NmV03Wilj5Um8r7lbpPXf2hqczJztJcrg/formResponse?pli=1