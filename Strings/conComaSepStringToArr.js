let str = "apple,banana,cherry";


function commSepArr(str){
let result = [];
let temp ='';
for(let i = 0; i< str.length ; i++){
    let code = str.charCodeAt(i); // get ASCII value of current char

    if(code === 44){ //44 = ASCII for comma ','
 
        result[result.length] = temp;
        temp = " "; // reset
    }else{
        temp += String.fromCharCode(code);
    }
}

// Add last word (Since no comma for last item)
if(temp !== ""){
    result[result.length] = temp;
}
return result;
}

console.log(commSepArr(str));