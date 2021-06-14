// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
    const yPolySquare = ['aflqv', 'bgmrw', 'chnsx', 'dijoty', 'ekpuz'],
        codeKey = yPolySquare.map((textBlock) => [...textBlock])

    function polybius(input, encode = true) {
        const inputArray = [...input.toLowerCase()]
        if (!encode) {
            if (inputArray.filter((arr) => !arr.includes(' ')).length % 2 !== 0)
                return false
            let decoded = []
            while (inputArray.length > 0) {
                if (inputArray[0] === ' ') {
                    decoded.push([' '])
                    inputArray.splice(0, 1)
                }
                decoded.push(inputArray.splice(0, 2))
            }
            return decoded
                .map((arr) => {
                    if (arr.length > 1) {
                        let x = arr[0] - 1,
                            y = arr[1] - 1
                        if (x === 3 && y === 1) return `(i/j)`
                        if (x === 3 && y >= 2 && y <= 4) y += 1
                        return codeKey[x][y]
                    } else return arr
                })
                .join('')
        } else {
            return inputArray
                .map((char) => {
                    if (char === ' ') return char
                    let x = codeKey.findIndex((arr) => arr.includes(char)) + 1,
                        y =
                            codeKey
                                .find((arr) => arr.includes(char))
                                .findIndex((arr) => arr.includes(char)) + 1
                    if (x === 4 && y >= 3) y -= 1
                    return [x, y]
                })
                .reduce((acc, curr) => acc.concat(curr))
                .join('')
        }
    }

    return {
        polybius,
    }
})()

module.exports = { polybius: polybiusModule.polybius }
