//require employee constructor from Employee.js
const Employee = require("./Employee");

//create Intern class that extends Employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    //methods
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

//export Intern class
module.exports = Intern;