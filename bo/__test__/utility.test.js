test('CaputalizeWords', () => {
    const utility = require('../utility');
    expect(utility.capitalizeWords('La meVa tITA es peTita', true)).toEqual(
        'La Meva Tita Es Petita',
    );
});
