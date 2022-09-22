//Establish required variables
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateHTML = require('./src/generateHTML');

//an array to hold a list of created employees
const completeEmpList = [];

//function for initial prompts to manager

const managerPrompts = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message: 'Hi manager! What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must enter your name!')
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'id',
            message:'Please enter your employee ID number (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('You must enter your ID number!')
                    return false;
                }
             }
        },
        {
            type:'input',
            name:'email',
            message:'Please enter your work email address (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You must enter your work email address!')
                    return false;
                }
             }
        },
        {
            type:'input',
            name:'office',
            message:'Please enter your office number (Required)',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('You must enter your office number!')
                    return false;
                }
             }
        },
    ]);
};

//function for prompts for engineer

const engineerPrompts = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message: 'What is the name of this engineer? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must enter a name!')
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'id',
            message:'Please enter this employees ID number (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('You must enter this employees ID number!')
                    return false;
                }
             }
        },
        {
            type:'input',
            name:'email',
            message:'Please enter this employees work email address (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You must enter this employees work email address!')
                    return false;
                }
             }
        },
        {
            type:'input',
            name:'github',
            message:'Please enter this engineers Github username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('You must enter this employees Github username!')
                    return false;
                }
             }
        },
    ]);
};

//function for prompts for intern

const internPrompts = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message: 'What is the name of this intern? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must enter a name!')
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'id',
            message:'Please enter this employees ID number (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('You must enter this employees ID number!')
                    return false;
                }
             }
        },
        {
            type:'input',
            name:'email',
            message:'Please enter this employees work email address (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You must enter this employees work email address!')
                    return false;
                }
             }
        },
        {
            type:'input',
            name:'school',
            message:'Please enter the school this intern attends (Required)',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('You must enter this employees school!')
                    return false;
                }
             }
        },
    ]);
};


//Prompt to add employees by role

const addEmployeePrompt = () => {
    inquirer.prompt([
        {
            type: 'checkbox',
            name: 'addEmployee',
            message: 'Please select the role of the next employee you will be adding',
            choices: ['Add Engineer', 'Add Intern', 'Team is complete']
        }
    ])
    .then(data => {
        switch(data.addEmployee) {
            case 'Add Engineer': engineerPrompts()
            .then(data => {
                const newEngineer = new Engineer(data.id, data.email, data.github);

                completeEmpList.push(newEngineer)
            })
            .then(addEmployeePrompt)

            break;

            case 'Add Intern': internPrompts()
            .then(data => {
                const newIntern = new Intern(data.name, data.id, data.email, data.school);

                completeEmpList.push(newIntern)
            })
            .then(addEmployeePrompt)

            break;

            default: showEmpList();
            break;
        }
    });
};


managerPrompts()

.then(data => {
    const newManager = new Manager(data.name, data.id, data.email, data.office);

    completeEmpList.push(newManager)

    addEmployeePrompt()
});

const showEmpList = () => {
    console.log(completeEmpList);
};