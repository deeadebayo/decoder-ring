const { polybius } = require('../src/polybius'),
    expect = require('chai').expect

describe('polybius', () => {
    it('should encode numbers  with a grid for text I provide  and ignore capital letters', () => {
        const input = 'thinkful',
            expected = '4432423352125413',
            actual = polybius(input)

        expect(actual).to.equal(expected)
    })
    it('should respect the spaces in the digits I provide', () => {
        const input = '3251131343 2543241341',
            expected = 'hello world',
            actual = polybius(input, false)

        expect(actual).to.equal(expected)
    })
    it('when encoding translate i and j to 42', () => {
        const input = 'i',
            expected = '42',
            actual = polybius(input)

        expect(actual).to.equal(expected)
    })
    it('when decoding translate 42 to (i/j)', () => {
        const input = '42',
            expected = 'j',
            actual = polybius(input, false)

        expect(actual).to.include(expected)
    })
})
