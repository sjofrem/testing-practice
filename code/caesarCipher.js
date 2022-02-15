function shift(n){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let newalpha = '';
    for (let i = 0; i < alphabet.length; i++){
        let offset = (i + n) % alphabet.length;
        newalpha += alphabet[offset];
    }
    return newalpha;
}

function isUpperCase(letter) {
    if(letter === letter.toUpperCase()) {
        return true;
    }
    return false;
}

function caesarCipher(text, key) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const newalpha = shift(key);
    let result = '';

    for(let i = 0; i<text.length; i++) {
        if(isUpperCase(text[i])) {
            if(typeof text[i] === 'string' && alphabet.indexOf(text[i].toLowerCase()) > -1) {
                let pos = alphabet.indexOf(text[i].toLowerCase())
                result += newalpha[pos].toUpperCase();
            }
            else{
                result += text[i];
            }
        }
        else{
            if(typeof text[i] === 'string' && alphabet.indexOf(text[i]) > -1) {
                let pos = alphabet.indexOf(text[i])
                result += newalpha[pos];
            }
            else{
                result += text[i];
            }
        }
    }
    return result;
}

module.exports = caesarCipher;
