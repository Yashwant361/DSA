function maxConsecOnes(arr) {
    let n= arr.length;

    let maxCount=0;
    let count = 0;
 for(let i= 0 ; i< n ; i++){
    if(arr[i] ===1){
        count++;
    }
    else{
        count = 0;
    }
    maxCount = Math.max(maxCount,count);
 }
 return maxCount;

}
function main() {
    let arr = [0, 1, 0, 1, 1, 1, 1];
    console.log(maxConsecOnes(arr));

}
main();