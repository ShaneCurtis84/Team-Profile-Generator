// Packages required

const inquirer = require("inquirer");
const fs = require("fs");


//Modules to generate team profile

const generateHtml = require("./src/generateHtml")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


//Empty array for new employees to be added to

let employees = []


// Function to handle creating a new Manager

function managerQuestions() {

inquirer.prompt([
    
    {
        type: "input",
        name: "name",
        message: "What is the Team Manager's Name?",
    },

    {
        type: "input",
        name: "id",
        message: "What is the Team Manager's employee Id?",
    },

    {
        type: "input",
        name: "email",
        message: "What is the Team Manager's Email address?",
    },

    {
        type: "input",
        name: "officeNumber",
        message: "What is the Team Manager's Office Number?",
    },

    {
        type: "list",
        name: "additionalEmployees",
        message: "Would you like to add more team members or finish your team?",
        choices: ["Intern", "Engineer", "Finish"]
    },
])

.then(data => {
    let manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber,
    );

    employees.push(manager);


    if(data.additionalEmployees === "Engineer")

    {
        engineerQuestions();
    }else if(data.additionalEmployees === "Intern")
    {
        internQuestions();
    }else
    {
    writeHtml()
    }

})



}


// Function to handle creating a new Engineer

function engineerQuestions() {

    inquirer.prompt(
 [

    {
        type: "input",
        name: "name",
        message: "What is the Engineer's Name?",
    },

    {
        type: "input",
        name: "id",
        message: "What is the Engineer's employee Id?",
    },

    {
        type: "input",
        name: "email",
        message: "What is the Engineer's Email address?",
    },

    {
        type: "input",
        name: "github",
        message: "What is the Engineer's Github Username?"
    },

    {
        type: "list",
        name: "additionalEmployees",
        message: "Would you like to add more team members or finish your team?",
        choices: ["Intern", "Engineer", "Finish"]
    },

])


.then(data => {
    let engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github,
    );

    employees.push(engineer);

    if(data.additionalEmployees === "Engineer")

    {
        engineerQuestions();
    }else if(data.additionalEmployees === "Intern")
    {
        internQuestions();
    }else
    {
        //Generate html
        writeHtml()
    }

})




}


// Function to handle creating a new Intern

function internQuestions(){

inquirer.prompt(

 [

    {
        type: "input",
        name: "name",
        message: "What is the Intern's Name?",
    },

    {
        type: "input",
        name: "id",
        message: "What is the Intern's employee Id?",
    },

    {
        type: "input",
        name: "email",
        message: "What is the Intern's Email address?",
    },

    {
        type: "input",
        name: "school",
        message: "What is the name of the Interns's School?",
    },

    {
        type: "list",
        name: "additionalEmployees",
        message: "Would you like to add more team members or finish your team?",
        choices: ["Intern", "Engineer", "Finish"]
    },

])

.then(data => {
    let intern = new Intern(
        data.name,
        data.id,
        data.email,
        data.school,
    );

    employees.push(intern);

    if(data.additionalEmployees === "Engineer")

    {
        engineerQuestions();
    }else if(data.additionalEmployees === "Intern")
    {
        internQuestions();
    }else
    {
        //Generate html
        writeHtml()
    }

})




}


//Function to generate html page

function writeHtml() {
    let completedHTML = generateHtml(employees)
  fs.writeFile("./dist/teamProfile.html" , completedHTML, (err) =>
  err ? console.log(err) : console.log("Team profile has been generated")) 
  }





// Function to start the app

function init() {
    managerQuestions()

  }
  

  //Invokes the init function

  init();