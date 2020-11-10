const {add, mul, sub, div} = require('./arith');

xtest('2+3=5', () => {
    expect (add(2,3)).toBe(5);
});
test.skip('2*3=6', () => {
    expect (mul(2,3)).toBe(6);
});
test('5-3=2', () => {
    expect (sub(5,3)).toBe(2);
});
test('6/3=2', () => {
    expect (div(6,3)).toBe(2);
});