const { caesar } = require('../src/caesar'),
	expect = require('chai').expect

describe('caesar', () => {
	it('should shift the letters in the given text by the shift spaces provided, respecting spaces', () => {
		const input = 'This is a secret message!',
			expected = 'bpqa qa i amkzmb umaaiom!',
			actual = caesar(input, 8)
		expect(actual).to.equal(expected)
	})
	it('should decode when encode is false', () => {
		const input = 'BPQA qa I amkzmb umaaiom!',
			expected = 'this is a secret message!',
			actual = caesar(input, 8, false)
		expect(actual).to.equal(expected)
	})
	it('return false is the shift is not present, equal to 0, less than -25, or greater than 25', () => {
		const input = 'thinkful',
			expected = false,
			actual = caesar(input)
		expect(actual).to.equal(expected)
	})
})
