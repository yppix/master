const sumF = require('./firstTest')
const sumFunc = jest.fn()

describe("Sum function", () => {
    const sum = [
        [3, 2, 5],
        [4, 3, 7],
        [3, 9, 12]
    ]
    test.each(sum)( "Function make correction sum", (a,b,expected)=> {
            expect(sumF(a,b)).toBe(expected);
    });
    test ("Transform to number", ()=>{
        expect(sumF("3","4")).toBe(7);
    })
    // test('ggg', ()=>{
    //
    //     expect (sumF(50)).toBe(true)
    // })
    // const sum = [
    //     [3, 2, 5],
    //     [4, 3, 7],
    //     [3, 9, 12]
    // ]
    // test.each(sum)(
    //     "Function correcting sum",
    //     (value1, value2, result) => expect(sumF(value1, value2).toBe(result))
    // );
});