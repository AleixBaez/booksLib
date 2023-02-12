const Edition = require('../app/edition');
const Default = require('../app/default');
const Status = require('../app/status');
const Volume = require('../app/volume').Volume;

const Money = require('dinero.js');

const title = new Edition(
    'MyTitle',
    'seRgio naVarro',
    'Andaguarra', //
    '978-1-4028-9462-6',
    'ca',
);

        test('init and get', () => {
            var myVol = new Volume(
                title,
                Money({ amount: 20, currency: 'EUR' }).toObject(),
            );
            expect(myVol.getEdition()).toStrictEqual(title);
            expect(myVol.getAcquisitionPrice()).toEqual(
                Money({ amount: 20, currency: 'EUR' }).toObject(),
            );
            expect(myVol.getWarehouse()).toEqual(new Default().warehouse());
            expect(myVol.getStatus()).toEqual(new Status());
            expect(myVol.getEdition()).toEqual(title);
        });

        test('setWarehouse', () => {
            var myVol = new Volume(
                title,
                Money({ amount: 20, currency: 'EUR' }).toObject(),
            );
            expect(myVol.getWarehouse()).toEqual(new Default().warehouse());
            myVol.setWarehouse('Blue space');
            expect(myVol.getWarehouse()).toEqual('Blue space');
        });

        test('sell', () => {
            var myVol = new Volume(
                title,
                Money({ amount: 20, currency: 'EUR' }).toObject(),
            );
            const saleMoney = Money({ amount: 250, currency: 'EUR' }).toObject();
            expect(myVol.getStatus().getStatus()).toEqual(new Status().getStatus() );
            myVol.sell(saleMoney);
            expect(myVol.getStatus().isOnSale()).toEqual(false);
            expect(myVol.getStatus().isSold()).toEqual(true);
            expect(myVol.getSalePrice()).toEqual(saleMoney);



    });

