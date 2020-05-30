const Port = require('../src/Port.js');

describe('Port', () => {
    it('can be instantiated', () => {

        expect(new Port()).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        const port = new Port('Dover');

        expect(port.name).toBe('Dover');
    });
});