# [36. Valid Sudoku](https://leetcode.com/problems/valid-sudoku/)

## Solution 1 - Visited

-   Traverse the board and if the number already exists in the current row or col or grid, then return false.
-   Else mark the number as visited in the current row, col and grid.
-   Return true.
-   Complexity
    -   Time - `O(1)`
    -   Space - `O(1)`

```js
const isValidSudoku = function (board) {
    const row = new Array(9);
    for (let i = 0; i < 9; i++) {
        row[i] = new Array(9).fill(false);
    }
    const col = new Array(9);
    for (let i = 0; i < 9; i++) {
        col[i] = new Array(9).fill(false);
    }
    const grid = new Array(9);
    for (let i = 0; i < 9; i++) {
        grid[i] = new Array(9).fill(false);
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                const n = parseInt(board[i][j]);
                const key = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (row[i][n] || col[j][n] || grid[key][n]) {
                    return false;
                } else {
                    row[i][n] = true;
                    col[j][n] = true;
                    grid[key][n] = true;
                }
            }
        }
    }
    return true;
};
```
