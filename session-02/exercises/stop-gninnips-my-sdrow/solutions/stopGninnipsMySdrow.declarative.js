function spinWords(string) {
    let arrayWords = string.split(' ');
    for (let i = 0; i < arrayWords.length; i++) {
        let word = ""
        if (arrayWords[i].length >= 5) {
            word = arrayWords[i].split('').reverse().join('');
            arrayWords[i] = word
        }
    }
    return arrayWords.join(' ');
}