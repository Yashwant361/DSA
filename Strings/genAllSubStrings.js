let str = 'abc'

function genAllSubstring(str){
    let result = [];

    for (let i = 0; i < str.length; i++) {
        let temp = ' ';
        for (let j = 0; j < str.length; j++) {
        temp  += str[j];
        result.push(temp); 
            
        }
        
    }
    return result;
}
console.log(genAllSubstring(str));