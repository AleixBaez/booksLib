const utility = require('./utility');

// I should change available statusses to make it a dictionary and be able to consult from client code
// if the status of a volume corresponds to one or another thing.
class AvailableStatusses{

    static #known_statusses =   ['on sale', 'reserved', 'sold', 'delivery', 'delivered', 'returned', 'refunded'];

    static known_statusses(){return this.#known_statusses;}; 

    static size(){
     
        return this.known_statusses().length
    };

    static first(){return this.known_statusses()[0]};

    static indexOf(a_status) {return this.known_statusses().indexOf(a_status);}

    static nextTo(a_status){ 
        
       return  this.known_statusses()[this.indexOf(a_status)+1] };

};



class Status {
    
   

    constructor() {
        this.status = AvailableStatusses.first();
    
    };
    
    getStatus(){
        return this.status;

    };
    
    next(){
     
        if (AvailableStatusses.indexOf(this.status) <  AvailableStatusses.size()-1){ 
        this.status =   AvailableStatusses.nextTo(this.status);}
        else{
        this.status =   AvailableStatusses.first();    
        };   
    };  
    
};

module.exports= Status;