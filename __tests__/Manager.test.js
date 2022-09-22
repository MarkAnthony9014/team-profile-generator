const Employee = require('../lib/Employee.js');

const Manager = require('../lib/Manager.js');

const newManager = new Manager('Tim', '491994', 'tim@gmail.com', '3542');

//test to see if function works and calls values from arguments
test('run test for Manager constructor values', () => {
    expect(newManager.name).toBe('Tim');

    expect(newManager.id).toBe('491994');

    expect(newManager.email).toBe('tim@gmail.com');

});


test('run test to get OfficeNumber from object', () => {
    expect(newManager.getOfficeNumber()).toBe('3542');
});