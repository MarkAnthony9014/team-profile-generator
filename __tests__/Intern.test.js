const Employee = require('../lib/Employee.js');

const Intern = require('../lib/Intern.js');

const newIntern = new Intern('Jessalyn', '411998', 'jessalyn@gmail.com', 'San Antonio College');

//test to see if function works and calls values from arguments
test('run test for Intern constructor values', () => {
    expect(newIntern.name).toBe('Jessalyn');

    expect(newIntern.id).toBe('411998');

    expect(newIntern.email).toBe('jessalyn@gmail.com');

});


test('run test to get school from object', () => {
    expect(newIntern.getSchool()).toBe('San Antonio College');
});