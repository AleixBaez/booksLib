const Dinero = require('dinero.js');


class Default {
    
    constructor() {
    };

    warehouse(){return 'Sant Joan 190, Barcelona'; };  
    acquisition_price(){
        return new Dinero({ amount:50, currency: 'EUR' }).toObject(); 
       };
};

module.exports= Default;
