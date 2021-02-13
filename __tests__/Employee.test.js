const Employee = require('../lib/Employee');

test('creates a Employee object', () => {
    const employee = new Employee('Bob', '1', 'bob123@gmail.com');

    expect(employee.name).toBe('Bob');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('bob123@gmail.com');
});

test('get employee\'s name', () => {
    const employee = new Employee('Bob', '1', 'bob123@gmail.com');
    
    expect(employee.getName()).toBe(employee.name);
});

test('get employee\' id', () => {
    const employee = new Employee('Bob', '1', 'bob123@gmail.com');

    expect(employee.getId()).toBe(employee.id);
});

test('get employee\'s email', () => {
    const employee = new Employee('Bob', '1',  'bob123@gmail.com');

    expect(employee.getEmail()).toBe(employee.email);
});

test('get employee\'s role', () => {
    const employee = new Employee('Bob', '1', 'bob123@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});