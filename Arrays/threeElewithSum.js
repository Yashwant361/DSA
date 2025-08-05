let arr = [2, 4, 1, 5, 7];
let target = 12;

/*Brute Forec appraoch */

// function threeSum(arr){
//   let n = arr.length;

//   for (let i = 0; i < n-2; i++) {
//     for (let j = i+1; j < n-1; j++) {
//      for (let k = j+1; k < n; k++) {
//       if(arr[i] + arr[j] + arr[k] === target){
//         // console.log(`Found: ${arr}, target is:  ${target}`);
//         return true; // target hit
//       }
//      }

//     }

//   }
//   return false; // target miss
// }

// console.log(threeSum(arr));



/* In this Question we divided into parts where -
  Steps1 :  1st one is to sorted the  array. Then,
  Steps2 :  Apply two pointer or Two sum logic

 */

// Sort the arrays ==> Use Bubble sort
function hasTrioWithSum(arr, target) {
  let N = arr.length;

  let isSorted = true;
  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < N - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        ar r[j + 1] = temp;
      }
    }
  }
  // return arr;
  // }
  // console.log(hasTrioWithSum(arr));

  // PART 2 ==> Two Pointer approach

  for (let i = 0; i < N - 2; i++) {
    let left = i + 1;
    let right = N - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];

      if (sum === target) {
        console.log("Found:", arr[i], arr[left], arr[right]);
        return true;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return false;
}

console.log("Result:", hasTrioWithSum(arr, target));
