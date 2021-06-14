// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
	function substitution(input, alphabet, encode = true) {
	if(!alphabet) return false
	if(alphabet.length !== 26) return false
	if(Array.from(new Set(alphabet)).length !== 26) return false
	let abc = 'abcdefghijklmnopqrstuvwxyz'.split(''), alpha = alphabet.split(''), inputted = input.toLowerCase().split(''),
codify = {}, decodify = {}, result = ''

	abc.forEach((letter, index) => {
		codify[letter] = alpha[index]
		decodify[alpha[index]] = letter
	});

	if(!encode) codify = decodify
	
	inputted.forEach(input => result += input === ' ' ? ' ': codify[input])
	return result
	}

	return {
		substitution,
	}
})()

module.exports = { substitution: substitutionModule.substitution }
