const reverseString = function(string) {
    //taken a string in input
    // make a new string, reverse each character starting at end
    // return that new string
    let result  = ""
    for(let i=string.length-1; i>=0; i--){
        result += string.charAt(i);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
