//import engineer constructor from Engineer.js
const Engineer = require("../lib/Engineer");
//create a new engineer object, includes github username
test("creates an engineer object", () => {
    const engineer = new Engineer("John", 1, "johnb@gmail.com", "johnb");
    //test github username
    expect(engineer.github).toEqual(expect.any(String));
});

//test getGithub() method
test("gets engineer github username", () => {
    const engineer = new Engineer("John", 1, "johnb@gmail.com", "johnb");
    //test github username
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

//test getRole() method
test("gets engineer role", () => {
    const engineer = new Engineer("John", 1, "johnb@gmail.com");
    //test role
    expect(engineer.getRole()).toEqual("Engineer");
});