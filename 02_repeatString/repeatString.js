const repeatString = function(string, number) {
    // repeat string N number of times
    // two parameters, string, and number 
    // i'll loop the amount of the number, and append it to a result string
    let result = ""
    if(number <0){
        return "ERROR";
    }
    for(let i=0; i<number;i++){
        result+= string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
