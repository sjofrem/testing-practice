import reverseString from '../code/reverseString';

test(`"turing" should become "gnirut"`, () => {
    expect(reverseString('turing')).toBe('gnirut');
});

test(`"to infinity and beyond!" should become "!dnoyeb dna ytinifni ot"`, () => {
    expect(reverseString('to infinity and beyond!')).toBe('!dnoyeb dna ytinifni ot');
});

test(`"12345" should become "54321"`, () => {
    expect(reverseString('12345')).toBe('54321');
});

test(`"" should become ""`, () => {
    expect(reverseString('')).toBe('');
});