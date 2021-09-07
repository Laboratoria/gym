function oddOrEven(array) {
    if (array[0] == undefined || array.reduce((a, b) => a + b) % 2 == 0) {
        return 'even';
    }
    return 'odd';
}