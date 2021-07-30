const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    it('should extend the Employee class ', () => {
        const engineer = new Engineer();
        expect(typeof (engineer)).toBe('object');
        expect(engineer instanceof Engineer).toBe(true);
    })

    it('should have a github property that can be set on instantiation', () => {
        const engineer = new Engineer(1, 'brad', 'boy@gmail.com', 'boy');
        expect(engineer.github).toBe('boy');
    })

    it('should have a getGithub() function that can be called after instantiation', () => {
        const engineer = new Engineer(1, 'brad', 'boy@gmail.com', 'boy');
        expect(engineer.getGithub(1)).toBe('boy');
    })
})
