const Manager = require('../lib/Manager');

describe('Manager class', () => {
    it('should extend the Employee class ', () => {
        const manager = new Manager();
        expect(typeof (manager)).toBe('object');
        expect(manager instanceof Manager).toBe(true);
    })

    it('should have a officeNumber property that can be set on instantiation', () => {
        const manager = new Manager(1, 'brad', 'boy@gmail.com', '55');
        expect(manager.officeNumber).toBe('55');
    })

    it('should have a getRole() function that can be called after instantiation', () => {
        const manager = new Manager(1, 'brad', 'boy@gmail.com', 'boy');
        expect(manager.getRole(1)).toBe('Manager');
    })
})