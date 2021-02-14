const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern = new Intern('Robin', '4', 'robin123@gmail.com', 'uoft');

    expect(intern.name).toBe('Robin');
    expect(intern.id).toBe('4');
    expect(intern.email).toBe('robin123@gmail.com');
    expect(intern.school).toBe('uoft');
});

test('get intern\'s role', () => {
    const intern = new Intern('Robin', '4', 'robin123@gmail.com', 'uoft');

    expect(intern.getRole()).toBe('Intern');
});

test('get intern\'s school', () => {
    const intern = new Intern('Robin', '4', 'robin123@gmail.com', 'uoft');

    expect(intern.getSchool()).toBe('uoft');
})
