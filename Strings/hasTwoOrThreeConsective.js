let str = 'helloo';

function hasTwoOrThreeConsective(str){
    if(str.length < 2){
        return false; // can't have 2 or 3 consective
    }

    let count =1; //count current character
    for (let i = 1; i < str.length; i++) {
        if(str[i] === str[i-1]){
            count++;
        }
        if(count ===2 || count ==3){
            return true;// found 2 or 3 consective identical
        }
        else{
            count=1; // reset for new character
        }
        
    }
    return false;
}
console.log(hasTwoOrThreeConsective(str));