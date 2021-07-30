const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    it('should extend the Employee class ', () => {
        const engineer = new Engineer();
        expect(typeof (engineer)).toBe('object');
        expect(engineer instanceof Engineer).toBe(true);
    })
})
