/**
 * Сумма чисел периметра должна быть 24
 */

const matrix = [
    'XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO'
];

function perimiter(matrix) { // O(N*N)
    let resOfPerimitr = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 'X') {
                resOfPerimitr += j === 0 || matrix[i][j - 1] === 'O'
                resOfPerimitr += i === 0 || matrix[i - 1][j] === 'O'
                resOfPerimitr += i === matrix.length - 1 || matrix[i + 1][j] === 'O'
                resOfPerimitr += j === matrix[i].length - 1 || matrix[i][j + 1] === 'O'
            }
        }
    }
    return resOfPerimitr;
}

console.log(perimiter(matrix))

