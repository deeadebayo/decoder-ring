const { substitution } = require('../src/substitution'),
	expect = require('chai').expect;

    describe('substitution', () => {
        it('should return encode numbers for text input I provide', () => {
            const input = 'thinkful',
            array = 'xoyqmcgrukswaflnthdjpzibev',
                expected = 'jrufscpw',
                actual = substitution(input, array)
    
            expect(actual).to.equal(expected)
        })
    })