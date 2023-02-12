
const Status = require('./status');
const Default = require('./default');

class Volume {
    constructor(
        edition,
        acquisition_price = new Default().acquisition_price,
        warehouse = new Default().warehouse(),
        acquisition_time = Date.now(),
    ) {
        this.edition = edition;
        this.acquisition_price = acquisition_price;
        this.acquisition_time = acquisition_time;
        this.warehouse = warehouse;
        this.status = new Status();
        this.sale_price = null;
        this.sale_time = null;
    }

    getEdition() {
        return this.edition;
    }
    getAcquisitionPrice() {
        return this.acquisition_price;
    }
    getAcquisitonTime() {
        return this.acquisition_time;
    }
    getWarehouse() {
        return this.warehouse;
    }
    getStatus() {
        return this.status;
    }
    getSalePrice() {
        return this.sale_price;
    }
    getSaleTime() {
        return this.sale_time;
    }

    setWarehouse(warehouse) {
        this.warehouse = warehouse;
    }
}

/*id varchar(16), title varchar(255), author varchar(16),\
             editor varchar(255), reference varchar(32), reference_type varchar(1), publish_date date, \
             first_publication_date date, support varchar(1) */

module.exports = { Volume };
