const removeFromArray = function(arr, ...restParam) {
    for(var i = arr.length - 1; i >= 0; i--) {
        for(var j of restParam) {
            if(arr[i] === j) {
                arr.splice(i, 1);
            } else {
                continue;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
