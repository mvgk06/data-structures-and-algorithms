# [48. Rotate Image](https://leetcode.com/problems/rotate-image/)

## Solution 1 - Transpose + Reverse Rows

```js
const reverseDiagonal = (matrix, i, j) => {
    let start = [i, j],
        end = [j, i];
    while (start[0] < end[0]) {
        const temp = matrix[start[0]][start[1]];
        matrix[start[0]][start[1]] = matrix[end[0]][end[1]];
        matrix[end[0]][end[1]] = temp;
        start[0]++;
        start[1]--;
        end[0]--;
        end[1]++;
    }
};

const transpose = (matrix) => {
    const n = matrix.length;
    for (let j = 1; j < n; j++) {
        reverseDiagonal(matrix, 0, j);
    }
    for (let i = 1; i < n; i++) {
        reverseDiagonal(matrix, i, n - 1);
    }
};

const reverseRows = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
        let start = 0,
            end = matrix[i].length - 1;
        while (start < end) {
            const temp = matrix[i][start];
            matrix[i][start] = matrix[i][end];
            matrix[i][end] = temp;
            start++;
            end--;
        }
    }
};

const rotate = function (matrix) {
    transpose(matrix);
    reverseRows(matrix);
};
```

-   Time - `O(n^2)`
-   Space - `O(1)`
-   Where `n` is the number of the rows and columns of the matrix.
