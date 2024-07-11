const fibonacci = function(index) {

    index = Number(index);

    if(index === 0) return 0;
    if(index < 0) return 'OOPS';
    
    const sequence = [1, 1];

    for (let i = 2; i < index; i++) {
        sequence.push(sequence[i -1] + sequence[i -2]);
    }

    return sequence[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
