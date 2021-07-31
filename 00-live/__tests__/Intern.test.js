const Intern = require('../lib/Intern');

describe('Intern class', () => {
    it('should extend the Employee class ', () => {
        const intern = new Intern();
        expect(typeof (intern)).toBe('object');
        expect(intern instanceof Intern).toBe(true);
    })

    it('should have a school property that can be set on instantiation', () => {
        const intern = new Intern(1, 'brad', 'boy@gmail.com', 'Rice');
        expect(intern.school).toBe('Rice');
    })

    it('should have a getSchool() function that can be called after instantiation', () => {
        const intern = new Intern(1, 'brad', 'boy@gmail.com', 'Rice');
        expect(intern.getSchool(1)).toBe('Rice');
    })

    it('should have a getRole() function that can be called after instantiation', () => {
        const intern = new Intern(1, 'brad', 'boy@gmail.com', 'boy');
        expect(intern.getRole(1)).toBe('Intern');
    })
})