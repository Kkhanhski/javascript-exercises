const removeFromArray = function(arr, ...restParam) {
    for(var i = 0; i < arr.length; i++) {
        for(j of restParam) {
            if(arr[i] === j) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
