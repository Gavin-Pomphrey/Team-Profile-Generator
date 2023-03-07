//import manager constructor from Manager.js
const Manager = require("../lib/Manager");
//create a new manager object, includes office number
test("creates a manager object", () => {
    const manager = new Manager("John", 1, "johnb@gmail.com", 1);
    //test office number
    expect(manager.officeNumber).toEqual(expect.any(Number));
});
//get role ovveridden to return Manager
test("gets manager role", () => {
    const manager = new Manager("John", 1, "johnb@gmail.com", 1);
    //test role
    expect(manager.getRole()).toEqual("Manager");
});