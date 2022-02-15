function checkArguments(arg1, arg2) {
    if(typeof arg1 === 'number' && typeof arg2 === 'number') {
        return true
    }
    return false
}

function add(num1, num2) {
    if(checkArguments(num1, num2)){
        return num1 + num2;
    }
    return 'Arguments contain non-number';
}

function substract(num1, num2) {
    if(checkArguments(num1, num2)){
        return num1 - num2;
    }
    return 'Arguments contain non-number';
}

function divide(num1, num2) {
    if(checkArguments(num1, num2)){
        return num1 / num2;
    }
    return 'Arguments contain non-number';
}

function multiply(num1, num2) {
    if(checkArguments(num1, num2)){
        return num1 * num2;
    }
    return 'Arguments contain non-number';
}


const calculator = {
    add,
    substract,
    divide,
    multiply
}

module.exports =  calculator;