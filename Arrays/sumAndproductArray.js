let arr = [5, 4, 3, 2, 1];

// initial values
let sum = 0;
let prod = 1;

for (let i = 0; i <= arr.length-1; i++) {
     sum +=arr[i];
   prod = prod * arr[i];
    
}
 console.log(`Total Sum: `, sum);
 console.log(`Total Prod: `, prod);
 