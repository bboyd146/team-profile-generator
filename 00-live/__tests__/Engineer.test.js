const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    it('should extend Employee class', () => {
        const engineer = new Engineer();
        expect(typeof (engineer)).toBe('object');
        expect(employee instanceof Engineer).toBe(true);
    })
})