const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Sara', '3', 'sara123@gmail.com', 'sara-git');

    expect(engineer.name).toBe('Sara');
    expect(engineer.id).toBe('3');
    expect(engineer.email).toBe('sara123@gmail.com');
    expect(engineer.github).toBe('sara-git');
});

test('get engineer\'s role', () => {
    const engineer = new Engineer('Sara', '3', 'sara123@gmail.com', 'sara-git');

    expect(engineer.getRole()).toBe('Engineer');
});

test('get engineer\'s github', () => {
    const engineer = new Engineer('Sara', '3', 'sara123@gmail.com', 'sara-git');

    expect(engineer.getGithub()).toBe(engineer.github);
});