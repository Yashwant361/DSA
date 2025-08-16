let str = 'banana';

function firstAndLastIndex(str){
    let firstLast = {}; // object to store first and last indices

    for (let i = 0; i < str.length; i++) {
        // let ch = str[i];

        //if character  not seen before , set first index
        if(firstLast[str[i]] === undefined){
            firstLast[str[i]] = [i,i]; // [firstIndex,lastIndex]
        }else{
            //update last index
            firstLast[str[i]][1] = i;
        }
         
    }
    return firstLast;
}
console.log(firstAndLastIndex(str));