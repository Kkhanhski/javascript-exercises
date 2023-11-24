const reverseString = function(str) {
    var arr = [];
    var char='';
    var strReverse = '';
    for(var index = 0; index < str.length; index++) {
        char = str.charAt(index);
        arr.unshift(char);
    }
    strReverse = arr.join('');
    return strReverse;
};

// Do not edit below this line
module.exports = reverseString;
