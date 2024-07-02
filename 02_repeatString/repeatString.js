const repeatString = function(string, num) {
    if (num < 0) return 'ERROR';
    let output = '';
    output = output.padEnd((string.length) * num, string);
    return output;
}

// Do not edit below this line
module.exports = repeatString;
