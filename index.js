//import inquirer and htmlTemplate
const inquirer = require('inquirer');
const htmlTemplate = require('./src/htmlTemplate');

//import employee constructors
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//create an empty array called employees
const employees = [];

//function prompts the user to enter details about the team's manager using the Inquirer package and then creates the new manager object
function promptManager() {
    //return a promise
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's id?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's id!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's office number!");
                    return false;
                }
            }
        }
    ])
    //create a new manager object
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);
        employees.push(manager);
        console.log(manager);
    });
}

//function prompts the user to enter details about the team's engineer using the Inquirer package and then creates the new engineer object
function promptEngineer() {
    //return a promise
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's id?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's id!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's GitHub username!");
                    return false;
                }
            }
        }
    ])
    //create a new engineer object
    .then(engineerInput => {
        const { name, id, email, github } = engineerInput;
        const engineer = new Engineer(name, id, email, github);
        employees.push(engineer);
        console.log(engineer);
    });
}

//function prompts the user to enter details about the team's intern using the Inquirer package and then creates the new intern object
function promptIntern() {
    //return a promise
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's id?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's id!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!");
                    return false;
                }
            }
        }
    ])
    //create a new intern object
    .then(internInput => {
        const { name, id, email, school } = internInput;
        const intern = new Intern(name, id, email, school);
        employees.push(intern);
        console.log(intern);
    });
}

//function prompts the user to enter details about the team's engineer or intern using the Inquirer package and then creates the new engineer or intern object
function promptEmployee() {
    //return a promise
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern', 'I do not want to add any more team members']
        }
    ])
    //create a new engineer or intern object
    .then(employeeData => {
        if (employeeData.role === 'Engineer') {
            return promptEngineer();
        } else if (employeeData.role === 'Intern') {
            return promptIntern();
        } else {
            return employees;
        }
    })
}

//function writes the HTML file using the data from the user's input
function writeToFile() {
    //return a promise
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', generatePage(employees), err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}
