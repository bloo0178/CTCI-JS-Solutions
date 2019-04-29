const setCovering = require('./ga_8-stations');

let expectedResult = new Set();
expectedResult.add('ktwo');
expectedResult.add('kthree');
expectedResult.add('kone');
expectedResult.add('kfive');

test('GA Ch8 - Set-Covering Station Coverage', () => {
    console.log(expectedResult);
    expect(setCovering()).toEqual(expectedResult);
})