import caesarCipher from '../code/caesarCipher';

test(`"aabbcc" should become "ccddee"`, () => {
    expect(caesarCipher('aabbcc', 2)).toBe('ccddee');
});

test(`"aAbBzZ" should become "cCdDbB"`, () => {
    expect(caesarCipher('aAbBzZ', 2)).toBe('cCdDbB');
});

test(`"aA bB# zZ" should become "cC dD# bB"`, () => {
    expect(caesarCipher('aA bB# zZ', 2)).toBe('cC dD# bB');
});