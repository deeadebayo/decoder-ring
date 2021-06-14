const { caesar } = require('../src/caesar'),
    expect = require('chai').expect

describe('caesar', () => {
    it('should shift the letters in the given text by the shift spaces provided, respecting spaces and non alphabetic chracters, and ignoring capital letters', () => {
        const input = 'This# is a secret message!',
            expected = 'bpqa# qa i amkzmb umaaiom!',
            actual = caesar(input, 8)
        expect(actual).to.equal(expected)
    })
    it('shifts that go past the end of the alphabet.', () => {
        const input = 'zzzzz',
            expected = 'ccccc',
            actual = caesar(input, 3)
        expect(actual).to.equal(expected)
    })
    it('should decode when encode is false', () => {
        const input = 'BPQA qa I amkzmb umaaiom!',
            expected = 'this is a secret message!',
            actual = caesar(input, 8, false)
        expect(actual).to.equal(expected)
    })
    it('returns false if the shift value is equal to 0, less than -25, greater than 25, or not present', () => {
        const input = 'thinkful',
            expected = false,
            actual = caesar(input)
        expect(actual).to.equal(expected)
    })
})
