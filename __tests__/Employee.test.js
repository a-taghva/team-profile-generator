const Employee = require('../lib/Employee');

test('creates a Employee object', () => {
    const employee = new Employee('Bob', '1', 'bob123@gmail.com');

    expect(employee.name).toBe('Bob');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('bob123@gmail.com');
});

test('get employee\'s name', () => {
    const employee = new Employee('Bob', '1', 'bob123@gmail.com');
    
    expect(employee.getName()).toBe('Bob');
});

test('get employee\' id', () => {
    const employee = new Employee('Bob', '1', 'bob123@gmail.com');

    expect(employee.getId()).toBe('1');
});

test('get employee\'s email', () => {
    const employee = new Employee('Bob', '1',  'bob123@gmail.com');

    expect(employee.getEmail()).toBe('bob123@gmail.com');
});

test('get employee\'s role', () => {
    const employee = new Employee('Bob', '1', 'bob123@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});