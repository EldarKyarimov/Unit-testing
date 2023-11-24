const { validEmail } = require('./mailCheck')

describe('Function should return', () => {

    test('difined values', () => {
        expect(validEmail).toBeDefined()
    })

    test('valid email', () => {
        const result = validEmail('taycan@gmail.com');
        expect(result).toBe(true);
        expect(result).toBeTruthy()
    })

    test('invalid email', () => {
        const invalid = validEmail('taycan.gmail.com');
        expect(invalid).toBeFalsy();
        expect(invalid).not.toBeTruthy();
    })

})

