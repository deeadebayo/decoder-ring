const { polybius } = require('../src/polybius'),
	expect = require('chai').expect

describe('polybius', () => {
	it('should encode numbers  with a grid for text I provide', () => {
		const input = 'thinkful',
			expected = '4432423352125413',
			actual = polybius(input)

		expect(actual).to.equal(expected)
	})
	it('should respect the spaces in the digits I provide', () => {
		const input = '3251131343 2543241341',
			expected = 'hello world',
			actual = polybius(input)

		expect(actual).to.equal(expected)
	})
	it('should return false if the digits are not even number', () => {
		const input = '44324233521254134',
			expected = false,
			actual = polybius(input, false)

		expect(actual).to.equal(expected)
	})
})
