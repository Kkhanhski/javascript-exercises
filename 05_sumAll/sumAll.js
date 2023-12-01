const sumAll = function(a, b) {
    var result = 0;
    if((typeof(a) === 'number' && typeof(b) === 'number') && a >= 0 && b >= 0) {
        if(a > b) {
            let c = a;
            a = b;
            b = c;
        }
        for(a; a<=b; a++) {
            result+= a;
        }
    } else return 'ERROR';
    return result;
};

// Do not edit below this line
module.exports = sumAll;
