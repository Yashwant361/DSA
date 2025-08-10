
/**
 a = 97 , z = 122
 A = 65 , Z = 90

 output explaination : 
 Sort numerically (smallest to largest):

97 (a), 101 (e), 108 (l), 112 (p), 112 (p)
=> aelpa
 */

let str = 'elppa';

function sortString(str) {
    // Step 1: convert string to array manually
    let strArr = [];
    for (let i = 0; i < str.length; i++) {
        strArr[i] = str[i];
    }

    // Step 2: Bubble sort using ASCII values
    for (let i = 0; i < strArr.length - 1; i++) {
        for (let j = 0; j < strArr.length - 1 - i; j++) {
            if (strArr[j].charCodeAt(0) > strArr[j + 1].charCodeAt(0)) {
                let temp = strArr[j];
                strArr[j] = strArr[j + 1];
                strArr[j + 1] = temp;
            }
        }
    }

    // Step 3: Build sorted string
    let sortedStr = '';
    for (let i = 0; i < strArr.length; i++) {
        sortedStr += strArr[i];
    }

    return sortedStr;
}

console.log(sortString(str)); // "aelpp"
