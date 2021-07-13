const Manager = require("../lib/Manager");


describe('Manager', () => {

    it('Can add a name/id and email using an argument', () => {
        const manager = new Manager('Shane', '05', 'Shane@iinet.com','shanecurtis84');
        expect(manager.name).toBe('Shane');
        expect(manager.id).toBe('05');
        expect(manager.email).toBe('Shane@iinet.com');
        
    })
})

describe("getOfficeNumber", () => {
    it("Can get Office Number via getOfficeNumber()", () => {
       
        const manager = new Manager('Shane', '05', 'Shane@iinet.com','1');
        expect(manager.getOfficeNumber()).toBe('1');
    });
});