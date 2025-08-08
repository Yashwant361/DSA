let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

/* output : [9,7,5,3,1]
 9 => 0 even index
 8 => 1
 7 => 2 even index
 6 => 3
 5 => 4 even index
 4 => 5
 3 => 6 even index
 2 => 7
 1 => 8 even index
 0 => 9
*/

for (let i = 0; i <= arr.length - 1; i++) {
     // this logic , divides the index whoes are even 
    if(i %2 ===0){
        console.log(`Alternative elements :${arr[i]}, indexes ${i}`);
    }
}
