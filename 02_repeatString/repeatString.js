const repeatString = function(word, times) {
    if(times < 0) return 'ERROR'
    else {
        var str = "";
        for(var i=0; i<times; i++) {
            str+= word;
        }
        return str;
    }
};

// Do not edit below this line
module.exports = repeatString;
