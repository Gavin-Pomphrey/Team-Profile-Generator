//import intern constructor from Intern.js
const Intern = require("../lib/Intern");
//create a new intern object, includes school
test("creates an intern object", () => {
    const intern = new Intern("John", 1, "johnb@gmail.com", "UCLA");
    //test school
    expect(intern.school).toEqual(expect.any(String));
});
//test getSchool() method
test("gets intern school", () => {
    const intern = new Intern("John", 1, "johnb@gmail.com", "UCLA");
    //test school
    expect(intern.getSchool()).toEqual(expect.any(String));
});
//test getRole() method
test("gets intern role", () => {
    const intern = new Intern("John", 1, "johnb@gmail.com", "UCLA");
    //test role
    expect(intern.getRole()).toEqual("Intern");
});