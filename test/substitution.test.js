const { substitution } = require('../src/substitution'),
    expect = require('chai').expect

describe('substitution', () => {
    it('should return new chracters substituted from the provide array', () => {
        const input = 'thinkful',
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
    it('if characters are not unique, return false', () => {
        const input = 'thinkful',
            array = 'abcabcabcabcabcabcabcabcyz',
            expected = false,
            actual = substitution(input, array)

        expect(actual).to.equal(expected)
    })
})
