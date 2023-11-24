const { Lodash } = require('./sync')

const _ = new Lodash()


describe('Lodash: compact', () => {
    let array;
    beforeEach(() => {
        array = [35, '', true, false, 0, null, undefined, 'house']
    })

    test('should be defined', () => {
        expect(_.compact).toBeDefined()
    })

    test('check push working', () => {

        array.push(...['dog', 'car'])
        expect(_.compact(array)).toContain('dog')
        expect(_.compact(array)).toContain('car')
    })

    test('should return truthly values', () => {
        const result = [35, true, 'house']
        expect(_.compact(array)).toEqual(result)
    })

    test('shoul filtered falsy value', () => {
        expect(_.compact(array)).not.toContain(false)
        expect(_.compact(array)).not.toContain(null)
        expect(_.compact(array)).not.toContain('')
        expect(_.compact(array)).not.toContain(0)
        expect(_.compact(array)).not.toContain(undefined)
    })
})


describe('Lodash: groupBy', () => {

    test('should be defined', () => {
        expect(_.groupBy).toBeDefined()
    })

    test('shoul group array items by Math.floor', () => {
        const array = [2.2, 2.4, 4.2, 3.1]
        const result = {
            2: [2.2, 2.4],
            4: [4.2],
            3: [3.1]
        }
        expect(_.groupBy(array, Math.floor)).toEqual(result)
    })

    test('shoul group array items by length', () => {
        const array = ['one', 'two', 'three', 'four']
        const result = {
            3: ['one', 'two'],
            5: ['three'],
            4: ['four']
        }
        expect(_.groupBy(array, 'length')).toEqual(result)
    })

    test('should Not return array', () => {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
    })


})