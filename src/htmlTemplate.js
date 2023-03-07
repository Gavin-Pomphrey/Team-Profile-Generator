//function called generateManager that takes in a parameter of manager
function generateManager(manager) {
    //return a string of html that will be used to generate the manager card
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `;
}
//function called generateEngineer that takes in a parameter of engineer
function generateEngineer(engineer) {
    //return a string of html that will be used to generate the engineer card
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https:github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
    `;
}
//function called generateIntern that takes in a parameter of intern
function generateIntern(intern) {
    //return a string of html that will be used to generate the intern card
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
    `;
}

//function called generateHTML that takes in a parameter of data
function generateHTML(data) {
    //create an empty array called cardsArray
    const cardsArray = [];
    //for each employee in the data array
    data.forEach(employee => {
        //create a variable called role and set it equal to the employee's role
        const role = employee.getRole();
        //if the role is equal to manager
        if (role === "Manager") {
            //push the result of the generateManager function into the cardsArray
            cardsArray.push(generateManager(employee));
        }
        //if the role is equal to engineer
        if (role === "Engineer") {
            //push the result of the generateEngineer function into the cardsArray
            cardsArray.push(generateEngineer(employee));
        }
        //if the role is equal to intern
        if (role === "Intern") {
            //push the result of the generateIntern function into the cardsArray
            cardsArray.push(generateIntern(employee));
        }
    });
}

//function called generateTeam that takes in a parameter of cardsArray
function generateTeam(cardsArray) {
    //return a string of html that will be used to generate the team
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css" />
        <title>My Team</title>
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            <div class="container">
                <div class="row">
                    <div class="team-area col-12 d-flex justify-content-center">
                        ${cardsArray.join("")}
                    </div>
                </div>
            </div>
        </main>
    </body>
    
    </html>
    `;
}

//export the generateHTML function
module.exports = htmlTemplate;