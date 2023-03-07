//import employee constructor from Employee.js
const Employee = require("../lib/Employee");

//create a new employee object
test("creates an employee object", () => {
    const employee = new Employee("John", 1, "johnb@gmail.com");

    expect(employee.name).toBe("John");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//test getName() method
test("gets employee name", () => {
    const employee = new Employee("John", 1, "johnb@gmail.com");

    expect(employee.getName()).toEqual(expect.any(String));
});

//test getId() method
test("gets employee id", () => {
    const employee = new Employee("John", 1, "johnb@gmail.com");
    
    expect(employee.getId()).toEqual(expect.any(Number));
});

//test getEmail() method
test("gets employee email", () => {
    const employee = new Employee("John", 1, "johnb@gmail.com");

    expect(employee.getEmail()).toEqual(expect.any(String));
});

//test getRole() method
test("gets employee role", () => {
    const employee = new Employee("John", 1, "johnb@gmail.com");

    expect(employee.getRole()).toEqual("Employee");
});