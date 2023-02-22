const Default = require('../default');
const Money = require('dinero.js');

test('default warehouse is Sant Joan 190', () => {
    defaultObject = new Default();
    expect(defaultObject.warehouse()).toEqual('Sant Joan 190, Barcelona');
});

test('default acquisition price is 0.5 EUR', () => {
    expect(new Default().acquisition_price()).toEqual(
        Money({ amount: 50, currency: 'EUR' }).toObject(),
    );
});
