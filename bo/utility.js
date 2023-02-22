const Dinero = require('dinero.js');

function money(amount, aString = 'EUR') {
    return new Dinero({ amount: cents, currency: 'EUR' }).toObject();
}

function capitalize(str, lower = false) {
    return (lower ? str.toLowerCase() : str).replace(
        /(?:^|\s|["'([{])+\S/g,
        (match) => match.toUpperCase(),
    );
}

function capitalizeOrNil(str, lower = false) {
    return !str ? str : capitalize(str, lower);
}

function createEnum(values) {
    const enumObject = {};
    for (const val of values) {
        enumObject[val] = val;
    }
    return Object.freeze(enumObject);
}

module.exports = {
    capitalizeWords: capitalizeOrNil,
    createEnum: createEnum,
    money,
};
