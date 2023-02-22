const Status = require('../status');

test('Status instance', () => {
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
