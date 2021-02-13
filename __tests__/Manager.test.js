const Manager = require('../lib/Manager');

test('creates Manager object', () => {
    const manager = new Manager('Alex', '2', 'alex123@gmail.com', '415');

    expect(manager.name).toBe('Alex');
    expect(manager.id).toBe('2');
    expect(manager.email).toBe('alex123@gmail.com');
    expect(manager.officeNumber).toBe('415');
});

test('get manager\'s role', () => {
    const manager = new Manager('Alex', '2', 'alex123@gmail.com', '415');

    expect(manager.getRole()).toBe('Manager');
});

test('get office number', () => {
    const manager = new Manager('Alex', '2', 'alex123@gmail.com', '415');

    expect(manager.getOfficeNumber()).toBe(manager.officeNumber);
});