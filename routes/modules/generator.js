function shortUrl(length) {

    const number = '1234567890'
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseLetters = lowerCaseLetters.toUpperCase()

    const collection = number.split('').concat(lowerCaseLetters.split(''), upperCaseLetters.split(''))

    let result = ''
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * collection.length)
        result += collection[index]
    }

    return result
}

module.exports = shortUrl