const Employee = require('../lib/Employee.js');

const Engineer = require('../lib/Engineer.js');

const newEngineer = new Engineer('Lydia', '7142014', 'lydia@gmail.com', 'lydiagithub')

//test to see if function works and calls values from arguments
test('run test for Engineer constructor values', () => {
    expect(newEngineer.name).toBe('Lydia');

    expect(newEngineer.id).toBe('7142014');

    expect(newEngineer.email).toBe('lydia@gmail.com');

});


test('run test to get github from object', () => {
    expect(newEngineer.getGithub()).toBe('lydiagithub');
});
