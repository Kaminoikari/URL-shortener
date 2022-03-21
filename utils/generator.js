function randomLetter(collection) {
    const index = Math.floor(Math.random() * collection.length)
    return collection[index]
}

function generator() {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const UpperCaseLetters = lowerCaseLetters.toUpperCase()
    const numbers = '1234567890'

    const collection = (lowerCaseLetters + UpperCaseLetters + numbers).split('')

    let url = ''
    for (let i = 0; i < 5; i++) {
        url += randomLetter(collection)
    }
    return url
}



module.exports = generator