let str = "   Hello   world   this   is   Ray   ";

function removeSpaces(str){
    let start = 0;
    let end = str.length-1;

    //Remove leading spaces
    while(start <= end && str[start] === ' '){
        start++;
    }
    //Remove trailing spaces
    while(end >= start && str[end] === ' '){
        end--;
    }
    // Remove extra spaces in between
    let result = ' ';
    let spaceFound = false;

    for (let i = start; i <= end; i++) {
        if (str[i] === ' ') {
           if (!spaceFound) {
             result+=' '; // add only one space
             spaceFound=true;
           }
        }
        else{
            result +=str[i];
            spaceFound = false;
        }
        
    }
    return result;

}

console.log(removeSpaces(str));