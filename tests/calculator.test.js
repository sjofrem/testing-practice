import calculator from '../code/calculator';

test(`add(2,2) is 4`, () => {
    expect(calculator.add(2,2)).toBe(4);
});

test(`add(3,-2) is 1`, () => {
    expect(calculator.add(3,-2)).toBe(1);
});

test(`add('a',5) is "Arguments contain non-number"`, () => {
    expect(calculator.add('a',5)).toBe('Arguments contain non-number');
});

test(`substract(2,2) is 0`, () => {
    expect(calculator.substract(2,2)).toBe(0);
});

test(`substract(3,-2) is 5`, () => {
    expect(calculator.substract(3,-2)).toBe(5);
});

test(`substract('a',5) is "Arguments contain non-number"`, () => {
    expect(calculator.substract('a',5)).toBe('Arguments contain non-number');
});

test(`divide(6,2) is 3`, () => {
    expect(calculator.divide(6,2)).toBe(3);
});

test(`divide(8,-5) is -1.6`, () => {
    expect(calculator.divide(8,-5)).toBe(-1.6);
});

test(`divide('a',5) is "Arguments contain non-number"`, () => {
    expect(calculator.divide('a',5)).toBe('Arguments contain non-number');
});

test(`multiply(6,2) is 12`, () => {
    expect(calculator.multiply(6,2)).toBe(12);
});

test(`multiply(8,-3) is -24`, () => {
    expect(calculator.multiply(8,-3)).toBe(-24);
});

test(`multiply('a',-3) is "Arguments contain non-number"`, () => {
    expect(calculator.multiply('a',-3)).toBe('Arguments contain non-number');
});