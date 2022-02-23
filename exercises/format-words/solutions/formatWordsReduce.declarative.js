function formatWords(words){
    return (words || [])
    .filter( w => w)
    .reduce(
    (str, word, index, array) => {
    return index === 0
    ? word
    : index === array.length -1
    ? `${str} and ${word}`
    : `${str}, ${word}`
    }, '')
}
