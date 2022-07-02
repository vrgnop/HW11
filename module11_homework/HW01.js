export function repeatWord  (word, count) {
    let wordArr, result
    wordArr = []
    if (typeof word === 'string' && count >= 1 && word !== '' && isNaN(+word)) {
            for (let i = 1; i <= count; i++) {
                wordArr.push(word + i)
            }   result = wordArr.join(', ')
    } else result = 'Данные не верны'
    return result
}