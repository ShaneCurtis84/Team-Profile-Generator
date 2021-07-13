const Intern = require("../lib/Intern");


describe('Intern', () => {

    it('Can add a name/id and email using an argument', () => {
        const intern = new Intern('Shane', '05', 'Shane@iinet.com');
        expect(intern.name).toBe('Shane');
        expect(intern.id).toBe('05');
        expect(intern.email).toBe('Shane@iinet.com');
        
    })
})


describe("getSchool", () => {
    it("Can get School via getSchool()", () => {
       
        const intern = new Intern('Shane', '05', 'Shane@iinet.com','school');
        expect(intern.getSchool()).toBe('school');
    });
});