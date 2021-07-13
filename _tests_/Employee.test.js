const Employee = require("../lib/Employee");

describe('Employee', () => {
it('Can instantiate class to create object', () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe('object');
})

it('Can add a name/id and email using an argument', () => {
    const employee = new Employee('Shane', '05', 'Shane@iinet.com');
    expect(employee.name).toBe('Shane');
    expect(employee.id).toBe('05');
    expect(employee.email).toBe('Shane@iinet.com');
})

})

describe("getName", () => {
    it("Can get name via getName()", () => {
       
        const employee = new Employee('Shane', '05', 'Shane@iinet.com');
        expect(employee.getName()).toBe('Shane');
    });
});

describe("getId", () => {
    it("Can get ID via getID()", () => {
      
        const employee = new Employee('Shane', '05', 'Shane@iinet.com');
        expect(employee.getId()).toBe('05');
    });
});

describe("getEmail", () => {
    it("Can get email via getEmail()", () => {
        const employee = new Employee('Shane', '05', 'Shane@iinet.com');
        expect(employee.getEmail()).toBe('Shane@iinet.com');
    });
});

describe('getRole', () => {
    it('Can get role via getRole(', () => {
        const employee = new Employee();
        expect(employee.getRole()).toBe('Employee');
        
    });
})
