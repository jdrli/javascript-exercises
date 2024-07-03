const fibonacci = function(nthNumber) {
    nthNumber = parseInt(nthNumber);
    let fibArr = [1, 1]
    let i = 2;
    if (nthNumber < 0) {
        return "OOPS";
    }
    else if (nthNumber == 0) {
        return 0;
    }
    else {
        while (i < nthNumber) {
            fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
            i++;
        }
        return fibArr[nthNumber - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
