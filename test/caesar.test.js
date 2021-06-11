// Write your tests here!
const { caesar } = require('../src/caesar'), expect = require('chai').expect

describe('caesar', () => {
    it('should shift the letters in the given text by the shift spaces provided', () => {
        const input = 'This is a secret message!',
        expected = 'bpqa qa i amkzmb umaaiom!', actual = caesar(input, 8)
        expect(actual).to.equal(expected)
    });
    
});
