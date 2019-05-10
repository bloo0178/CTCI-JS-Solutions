const zeroMatrix = require('./zeroMatrix');

let matrix1 = [[0,2,3],[4,5,6],[7,8,9]];
let matrix1result = [ [ 0, 0, 0 ], [ 0, 5, 6 ], [ 0, 8, 9 ] ];

let matrix2 = [[1,2,3],[4,5,6],[7,8,9]];

test('matrix1', () => {
    expect(zeroMatrix(matrix1)).toEqual(matrix1result);
})

test('matrix2', () => {
    expect(zeroMatrix(matrix2)).toEqual(matrix2);
})