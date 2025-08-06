
function bubbleSort(input){
    let arr = input.toString().split('').map(Number);
    let n = arr.length; 

    let i = 0; // firstIndex at 0
    let j = 0; // secIndex at 1

    for (let i = 0; i < n-1; i++) {
        let swapped = false;

        for(let j = 0 ; j < n-1-i ; j++){
            if(arr[j] > arr[j+1]){
               //swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        
        if(!swapped)break;
    }
    return arr.join('');

}

console.log(bubbleSort(7530));

/**
 🔁 Visual Example:
Array: [4, 3, 1, 2]

Outer Loop (i): Pass counter

Inner Loop (j): Goes from start up to the unsorted part

i=0 (first pass): compare 4↔3, then 4↔1, then 4↔2 → largest 4 goes to the end
i=1 (second pass): compare 3↔1, then 3↔2 → largest 3 bubbles up
 */