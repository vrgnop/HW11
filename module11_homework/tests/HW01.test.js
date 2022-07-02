import {repeatWord} from '../HW01.js'

describe('test to repeat function', () => {
    let correctWord, correctCount, numWord, numStrWord, minCount, emptyWord, strCount
    correctWord = 'Привет'
    correctCount = 2
    numWord = 10
    numStrWord = '10'
    minCount = -10
    emptyWord = ''
    strCount = ''
    it ('input data is correct', () => {
        expect(repeatWord(correctWord, correctCount)).toBe('Привет1, Привет2')
    })
    it ('input data is not correct', () => {
        expect(repeatWord(numWord, correctCount)).toBe('Данные не верны')
        expect(repeatWord(correctWord, minCount)).toBe('Данные не верны')
        expect(repeatWord(emptyWord, correctCount)).toBe('Данные не верны')
        expect(repeatWord(numStrWord, correctCount)).toBe('Данные не верны')
        expect(repeatWord(correctWord, strCount)).toBe('Данные не верны')
    })
})