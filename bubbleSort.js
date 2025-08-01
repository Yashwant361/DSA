
function bubbleSort(input){
    let arr = input.toString().split('').map(Number);
    let n = arr.length; 

    let i = 0; // firstIndex at 0
    let j = 1; // secIndex at 1

    for (let i = 0; i < n-1; i++) {
        let swapped = false;

        for(let j = 0 ; j <= n-1-i ; j++){
            if(arr[j] > arr[j+1]){

                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        
        if(!swapped)break;
    }
    return Number(arr.join(''));

}

console.log(bubbleSort(7530));