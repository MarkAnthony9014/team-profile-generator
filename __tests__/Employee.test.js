const Employee = require('../lib/Employee');

const newEmployee = new Employee('Mark', '08161990', 'mark@gmail.com');

//test to see if function works and calls values from arguments
test('run test for employee constuctor values', () => {
    expect(newEmployee.name).toBe('Mark');

    expect(newEmployee.id).toBe('08161990');

    expect(newEmployee.email).toBe('mark@gmail.com')
});


test('run test to see if we can get the name from object', () => {

    expect(newEmployee.getName()).toBe('Mark');

});


test('run test to get the id from object', () => {

    expect(newEmployee.getId()).toBe('08161990');

});


test('run test to get the email from object', () => {

    expect(newEmployee.getEmail()).toBe('mark@gmail.com');

});


test('run test to get the role from object', () => {

    expect(newEmployee.getRole()).toBe('Employee');

});