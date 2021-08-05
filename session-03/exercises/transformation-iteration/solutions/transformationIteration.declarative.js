function transform(source, target) {
    let result = []
    result.push(source)
    for (let i = 0; i < source.length; i++) {
        if (source[i] != target[i]) {
            let word = source.split("")
            for (let j = i; j >= 0; j--) {
                word[j] = target[j]
            }
            result.push(word.join(""))
        }
    }
    return result
}
