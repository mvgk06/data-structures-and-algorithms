/*

Brute force

Time - O(n*m) * O(m+n)
Space - O(n*m)

*/

const setMatrixZeroes = (i, j, helperMatrix) => {

  for (let a = 0; a < helperMatrix[i].length; a++) {
    helperMatrix[i][a] = 0;
  }

  for (let b = 0; b < helperMatrix.length; b++) {
    helperMatrix[b][j] = 0;
  }
};

const setZeroes1 = function (matrix) {

  const helperMatrix = new Array(matrix.length);

  for (let i = 0; i < matrix.length; i++) {
    helperMatrix[i] = new Array(matrix[i].length).fill(-1);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        setMatrixZeroes(i, j, helperMatrix);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (helperMatrix[i][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
};

/*

Optimized brute force 

Time - O(n*m)
Space - O(n+m)

*/

const setZeroes2 = function (matrix) {

  const helperRow = new Array(matrix.length).fill(-1), helperCol = new Array(matrix[0].length).fill(-1);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        helperRow[i] = 0;
        helperCol[j] = 0;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (helperRow[i] === 0 || helperCol[j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
};

/*

Optimal - TO UPDATE

Time - O(n*m)
Space - O(1)

*/
