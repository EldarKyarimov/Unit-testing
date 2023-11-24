// function expect(value) {
//     return {
//         toBe: (exp) => {
//             if (value === exp) {
//                 console.log('Success!');
//             } else {
//                 console.log(`Value ${value} is not equal to expected value: ${exp}`);
//             }
//         }
//     }
// }

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


const nativeNull = () => null;

module.exports = { sum, subtract, multiply, divide, nativeNull }