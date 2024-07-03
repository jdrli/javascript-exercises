    const sumAll = function(first, second) {
        let output = 0;
        
        if (first !== parseInt(first) || second !== parseInt(second) || first < 0 || second < 0) {
            return 'ERROR';
        }

        if (second > first){
            for (let i = first; i <= second; i++) {
                output += i;
            }
        }
        else if (first > second){
            for (let i = second; i <= first; i++) {
                output += i;
            }
        }

        return output;
};

// Do not edit below this line
module.exports = sumAll;
