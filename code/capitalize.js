// function that takes a string and returns it with the first character capitalized.

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

module.exports = capitalize;

