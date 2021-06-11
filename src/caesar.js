// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')
    if (!shift || shift > 25 || shift < -25) return false
    input = input.toLowerCase()
    if(encode) {
      return [...input].map(letter =>  /[a-z]/.test(letter) 
        // ? alphabets[(alphabets.indexOf(letter) + shift + ((shift % alphabets.length) - 1))]
        ? alphabets[(alphabets.indexOf(letter) + shift)]
        : letter
      ).join('')
    } else {
      return [...input].map(letter =>  /[a-z]/.test(letter) 
        ? alphabets[(alphabets.indexOf(letter) - shift) % alphabets.length]
        : letter
      ).join('')
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
