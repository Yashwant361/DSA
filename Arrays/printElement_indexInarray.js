let arr = [9,8,6,2];

for(let i = 0 ; i<=arr.length-1 ; i++){
    let index = i.toString().split('').map(Number);
    console.log(`Elements: ${arr[i]} ,index : ${index}`);
    
}