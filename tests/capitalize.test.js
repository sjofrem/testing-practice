import capitalize from '../code/capitalize';

test(`"turing" should become "Turing"`, () => {
    expect(capitalize('turing')).toBe('Turing');
});

test(`"TURING" should become "Turing"`, () => {
    expect(capitalize('TURING')).toBe('Turing');
});

test(`"tuRinG" should become "Turing"`, () => {
    expect(capitalize('tuRinG')).toBe('Turing');
});

test(`"" should become ""`, () => {
    expect(capitalize('')).toBe('');
});