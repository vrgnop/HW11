import {reverseStr} from '../index-reverse.js';

describe('test to reverse function', () => {
    let string = 'привет'
    it('should be correct reverse', () => {
        expect(reverseStr(string)).toBe('тевирп')
    })
})