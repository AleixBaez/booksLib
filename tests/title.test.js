const Title = require('../app/title');

test('getTitle returns a string', () => {
    const title = new Title();
    expect(typeof title.getTitle()).toBe('string');
   
    
  });

test('getTitle The title', () => {
    let title = new Title();
    expect( title.getTitle()).toEqual('');
    title = new Title('MyTitle');    
    expect( title.getTitle()).toEqual('MyTitle');

  });