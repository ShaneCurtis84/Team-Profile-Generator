const Engineer = require("../lib/Engineer");


describe('Engineer', () => {

    it('Can add a name/id and email using an argument', () => {
        const engineer = new Engineer('Shane', '05', 'Shane@iinet.com','shanecurtis84');
        expect(engineer.name).toBe('Shane');
        expect(engineer.id).toBe('05');
        expect(engineer.email).toBe('Shane@iinet.com');
        expect(engineer.github).toBe('shanecurtis84')
    })
})

describe("getGithub", () => {
    it("Can get github Username via getGithub()", () => {
       
        const engineer = new Engineer('Shane', '05', 'Shane@iinet.com','shanecurtis84');
        expect(engineer.getGithub()).toBe('shanecurtis84');
    });
});