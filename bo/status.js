// I should change available statusses to make it a dictionary and be able to consult from client code
// if the status of a volume corresponds to one or another thing.
class AvailableStatusses {
    static #known_statusses = [
        'on sale',
        'reserved',
        'sold',
        'delivery',
        'delivered',
        'returned',
        'refunded',
    ];

    static known_statusses() {
        return this.#known_statusses;
    }

    static size() {
        return this.known_statusses().length;
    }

    static first() {
        return this.known_statusses()[0];
    }

    static onSale() {
        return this.known_statusses()[0];
    }

    static reserved() {
        return this.known_statusses()[1];
    }

    static sold() {
        return this.known_statusses()[2];
    }

    static delivery() {
        return this.known_statusses()[3];
    }

    static delivered() {
        return this.known_statusses()[4];
    }

    static returned() {
        return this.known_statusses()[5];
    }

    static refunded() {
        return this.known_statusses()[6];
    }

    static indexOf(a_status) {
        return this.known_statusses().indexOf(a_status);
    }

    static nextTo(a_status) {
        return this.known_statusses()[this.indexOf(a_status) + 1];
    }
}

class Status {
    constructor() {
        this.status = AvailableStatusses.first();
    }

    getStatus() {
        return this.status;
    }

    next() {
        if (
            AvailableStatusses.indexOf(this.status) <
            AvailableStatusses.size() - 1
        ) {
            this.status = AvailableStatusses.nextTo(this.status);
        } else {
            this.status = AvailableStatusses.first();
        }
    }

    isOnSale() {
        return this.status == AvailableStatusses.onSale();
    }

    isReserved() {
        return this.status == AvailableStatusses.reserved();
    }

    isSold() {
        return this.status == AvailableStatusses.sold();
    }

    isDelivery() {
        return this.status == AvailableStatusses.delivery();
    }

    isDelivered() {
        return this.status == AvailableStatusses.delivered();
    }

    isReturned() {
        return this.status == AvailableStatusses.returned();
    }

    isRefunded() {
        return this.status == AvailableStatusses.refunded();
    }
}

module.exports = Status;
