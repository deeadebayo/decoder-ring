// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
	function caesar(input, shift, encode = true) {
		if (!shift || shift > 25 || shift < -25) return false
		if (!encode) shift *= -1

		input = input.toLowerCase()
		return [...input]
			.map((letter) => {
				if (!/[a-z]/.test(letter)) return letter
				let position = alphabet.indexOf(letter) + shift
				if (position > 25) position -= 26
				if (position < 0) position += 26
				return alphabet[position]
			})
			.join('')
	}

	return {
		caesar,
	}
})()

module.exports = { caesar: caesarModule.caesar }
