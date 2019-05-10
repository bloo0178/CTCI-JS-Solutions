const rotateMatrix = require("./rotate_matrix");

let matrix = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
let matrix2 = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]];
let matrix3 = [
	[0, 1, 2, 3, 4],
	[5, 6, 7, 8, 9],
	[10, 11, 12, 13, 14],
	[15, 16, 17, 18, 19],
	[20, 21, 22, 23, 24]
];
let matrix3rotated = [
	[20, 15, 10, 5, 0],
	[21, 16, 11, 6, 1],
	[22, 17, 12, 7, 2],
	[23, 18, 13, 8, 3],
	[24, 19, 14, 9, 4]
];

/*
console.log(matrix3);
rotateMatrix(matrix3);
console.log(matrix3);
*/

test("rotate-matrix", () => {
    rotateMatrix(matrix3);
    expect(matrix3).toEqual(matrix3rotated);
});


/*

n (matrix.length) = 5;
---FIRST FOR---
layer = 1;
first = layer = 1;
last = n - 1 - layer = 5 - 1 - 1 = 3;
---SECOND FOR---
i = first = 1;
offset = i - first = 0; 
top = matrix[first][i] = matrix[1][1]

matrix[1][1] = matrix[3][1]   :   6 -> 16
matrix[3][1] = matrix[3][3]   :   16 -> 18
matrix[3][3] = matrix[1][3]   :   18 -> 8
matrix[1][3] = top   :   8 -> 6


i = 2
offset = i - first = 2 - 1 = 1
top = matrix[1][2] = 7

matrix[1][2] = matrix[2][1]    :    7 -> 11


*/