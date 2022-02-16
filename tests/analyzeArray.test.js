import analyzeArray from '../code/analyzeArray';

test('[5,3,1,2] to be', () => {
    const expected = {
        average: 2.5,
        min: 1,
        max: 4,
        length: 4
    }
    const array = [4,3,1,2];
    expect(analyzeArray(array)).toEqual(expected);
});

test('[] to be', () => {
    const array = [];
    expect(analyzeArray(array)).toBeNull();
});

test('[0,10,100,1000] to be', () => {
    const expected = {
        average: 277.5,
        min: 0,
        max: 1000,
        length: 4
    }
    const array = [0,10,100,1000];
    expect(analyzeArray(array)).toEqual(expected);
});