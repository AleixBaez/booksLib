const Edition = require('../app/edition');
const Default = require('../app/default');
const Status = require('../app/status');
const Volume= require('../app/volume').Volume;

const Money = require('dinero.js');

test('CaputalizeWords', () => {
  const utility = require('../app/utility');
  expect(utility.capitalizeWords('La meVa tITA es peTita', true)).toEqual('La Meva Tita Es Petita');
 
  
});


test('getTitle returns a null', () => {
    const title =  new Edition();
    expect( title.getTitle()).toEqual(null);
   
    
  });

test('getTitle The title', () => {
    let title = new Edition();
    expect( title.getTitle()).toEqual(null);
    title = new Edition('MyTitle', 'seRgio naVarro', 'Andaguarra', //
     '978-1-4028-9462-6','ca'  );    
    expect( title.getTitle()).toEqual('Mytitle');
    expect( title.getAuthor()).toEqual('Sergio Navarro');
    expect( title.getEditor()).toEqual('Andaguarra');


  });


test('volume status', () =>{
 myStatus = new Status();
 
 expect(myStatus.getStatus()).toEqual('on sale');
 myStatus.next(); 
 expect(myStatus.getStatus()).toEqual('reserved');
 myStatus.next();
 expect(myStatus.getStatus()).toEqual('sold');
 myStatus.next();
 expect(myStatus.getStatus()).toEqual('delivery');
 myStatus.next();
 expect(myStatus.getStatus()).toEqual('delivered');
 myStatus.next();
 expect(myStatus.getStatus()).toEqual('returned');
 myStatus.next();
 expect(myStatus.getStatus()).toEqual('refunded');
 myStatus.next();
 expect(myStatus.getStatus()).toEqual('on sale');
});



test('default warehouse is Sant Joan 190', () => {
 const defaultObject = new Default();
  expect(defaultObject.warehouse()).toEqual('Sant Joan 190, Barcelona');

  
});

test('default acquisition price is 0.5 EUR', () => {
 const defaultObject = new Default();

 expect( defaultObject.acquisition_price()).toEqual( Money({ amount:50, currency: 'EUR' }).toObject());


});

test('class volume basic access', () =>{
 const  title = new Edition('MyTitle', 'seRgio naVarro', 'Andaguarra', //
  '978-1-4028-9462-6','ca'  );        
  var myVol = new Volume(title, Money({ amount:20, currency: 'EUR' }).toObject());
  expect(myVol.getEdition() ).toStrictEqual(title);
  expect(myVol.getAcquisitionPrice()).toEqual(Money({ amount:20, currency: 'EUR' }).toObject());
  expect(myVol.getWarehouse()).toEqual( new Default().warehouse());
  expect(myVol.getStatus()).toEqual(new Status());


})