/* 

Problem

https://www.pepcoding.com/resources/online-java-foundation/recursion-with-arraylists/get-maze-path-with-jumps-official/ojquestion

Approach

1. Recursion
- For each possible jump recursively get the maze paths for smaller sub problems.
- Create a result array where we can either go horizontal, vertical or diagonal along with the computed combinations.
- Return the result array.
- If cell (n-1,m-1) is reached, then return an array with empty string.
- If out of bounds, then return an empty array.

Time - O(3^(n+m+d)*k)
Space - O(k)

2. Backtracking
- For each index we have three choices either we can go horizontal, vertical or diagonal.
- Recursively solve the smaller sub problems.
- If cell (n-1,m-1) is reached, then push the current way into the result and return.
- If out of bounds, then return.

Time - O(3^(n+m+d))
Space - O(k)

n - number of rows
m - number of columns
d - average number of diagonals
k - average number of ways

*/

/* Recursion */

const getMazePaths = (n, m, i, j) => {
    if (i === n - 1 && j === m - 1) {
        const curr = [""];
        return curr;
    }
    if (i >= n || j >= m) {
        return [];
    }
    const result = [];
    for (let k = 1; k < m; k++) {
        const way1 = getMazePaths(n, m, i, j + k);
        for (let a = 0; a < way1.length; a++) {
            result.push(`h${k}` + way1[a]);
        }
    }
    for (let k = 1; k < n; k++) {
        const way2 = getMazePaths(n, m, i + k, j);
        for (let a = 0; a < way2.length; a++) {
            result.push(`v${k}` + way2[a]);
        }
    }
    for (let k = 1; k < n && k < m; k++) {
        const way3 = getMazePaths(n, m, i + k, j + k);
        for (let a = 0; a < way3.length; a++) {
            result.push(`d${k}` + way3[a]);
        }
    }
    return result;
};

const solve = (n, m) => {
    const result = getMazePaths(n, m, 0, 0);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
};

/* Backtracking */

const getMazePaths2 = (n, m, i, j, curr, result) => {
    if (i === n - 1 && j === m - 1) {
        result.push(curr);
        return;
    }
    if (i >= n || j >= m) {
        return;
    }
    for (let k = 1; k < m; k++) {
        getMazePaths2(n, m, i, j + k, curr + `h${k}`, result);
    }
    for (let k = 1; k < n; k++) {
        getMazePaths2(n, m, i + k, j, curr + `v${k}`, result);
    }
    for (let k = 1; k < n && k < m; k++) {
        getMazePaths2(n, m, i + k, j + k, curr + `d${k}`, result);
    }
};

const solve2 = (n, m) => {
    const curr = "", result = [];
    getMazePaths2(n, m, 0, 0, curr, result);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
};