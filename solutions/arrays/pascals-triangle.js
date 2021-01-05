/*

Brute force

Time - O(n*m)
Space - O(n*m)

*/

const generate = function (numRows) {

  const pascalTriangle = new Array(numRows);

  for (let i = 0; i < pascalTriangle.length; i++) {
    pascalTriangle[i] = new Array(i + 1).fill(1);

    for (let j = 0; j < pascalTriangle[i].length; j++) {
      if (j != 0 && i != j) {
        pascalTriangle[i][j] =
          pascalTriangle[i - 1][j] + pascalTriangle[i - 1][j - 1];
      }
    }
  }

  return pascalTriangle;
};
