const { substitution } = require('../src/substitution'),
    expect = require('chai').expect

describe('substitution', () => {
    it('correctly translates the given phrase, based on the alphabet given to the function, ignoring capital letters', () => {
        const input = 'thinKful',
            array = 'xoyqmcgrukswaflnthdjpzibev',
            expected = 'jrufscpw',
            actual = substitution(input, array)

        expect(actual).to.equal(expected)
    })
    it('should respect spaces in the returned string', () => {
        const input = 'You are an excellent spy',
            array = 'xoyqmcgrukswaflnthdjpzibev',
            expected = 'elp xhm xf mbymwwmfj dne',
            actual = substitution(input, array)

        expect(actual).to.equal(expected)
    })
    it('returns false if there are any duplicate characters in the given alphabet', () => {
        const input = 'thinkful',
            array = 'abcabcabcabcabcabcabcabcyz',
            expected = false,
            actual = substitution(input, array)

        expect(actual).to.equal(expected)
    })
})
