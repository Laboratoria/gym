function reverseWord(word) {
//TODO Have fun :)
    return word.split('').reverse().join('')
}
function spinWords(str) {
    return str
        .split(' ')
        .map(word => word.length >= 5 ? reverseWord(word) : word)
        .join(' ')
}
