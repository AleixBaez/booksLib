const Default = require('../app/default').default;
const Money = require('dinero.js');


test('default warehouse is Sant Joan 190', () => {
    defaultObject = Default();
    expect(defaultObject.warehouse()).toEqual('Sant Joan 190, Barcelona');

    
  });

test('default acquisition price is 0.5 EUR', () => {
    expect(Default().acquisition_price()).toEqual(Money({ amount: 50, currency: 'EUR' }));


  });