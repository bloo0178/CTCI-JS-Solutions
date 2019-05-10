/*

Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
column are set to 0.
Hints:

#17, If you just cleared the rows and columns as you found Os, you'd likely wind up clearing
the whole matrix. Try finding the cells with zeros first before making any changes to the
matrix.

#74, Can you use O(N) additional space instead of O(N2)? What information do you really
need from the list of cells that are zero?

#102 You probably need some data storage to maintain a list of the rows and columns that
need to be zeroed. Can you reduce the additional space usage to 0(1) by using the
matrix itself for data storage?

*/


function zeroMatrix(matrix) {

    let zeroCoords = [];

    for(let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if(matrix[row][col] === 0) {
                zeroCoords.push([row,col]);
            }
        }
    }

    for(let i = 0; i < zeroCoords.length; i++) {
        let row = zeroCoords[i][0];
        let col = zeroCoords[i][1]; 
        for (let j = 0; j < matrix.length; j++) {
            matrix[row][j] = 0;
        }
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[j][col] = 0; 
        }
    }

    return matrix;
}

module.exports = zeroMatrix; 