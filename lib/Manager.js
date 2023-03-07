//require employee constructor from Employee.js
const Employee = require("./Employee");

//create Manager class that extends Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    //methods
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

//export Manager class
module.exports = Manager;