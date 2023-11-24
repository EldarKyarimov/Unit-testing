const { reverseText } = require('./checkTxt')

describe('Function should', () => {

    test('return defined', () => {
        expect(reverseText).toBeDefined()
        expect(reverseText).not.toBeUndefined()
    })

    test('check reversed text', () => {
        expect(reverseText('hello')).toBe('olleh');
    })

    test('chech empty string', () => {
        expect(reverseText('')).toBeFalsy();
    })
})


