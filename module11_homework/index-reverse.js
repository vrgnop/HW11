export function reverseStr (string) {
    let reverseArr = string.toLowerCase().split('')
    reverseArr = reverseArr.reverse()
    string = reverseArr.join('')
    return string
}
