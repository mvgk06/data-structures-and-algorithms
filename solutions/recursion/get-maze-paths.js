/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/recursion-with-arraylists/get-maze-paths-official/ojquestion

Approach

1. Recursion
- Recursively get the maze paths for smaller sub problems.
- Create a result array where we can either go horizontal or vertical along with the computed combinations.
- Return the result array.
- If cell (n-1,m-1) is reached, then return an array with empty string.
- If out of bounds, then return an empty array.

Time - O(2^(n+m)*k)
Space - O(k)

2. Backtracking
- For each index we have two choices we can either go horizontal or vertical.
- Recursively solve the smaller sub problems.
- If cell (n-1,m-1) is reached, then push the current way into the result and return.
- If out of bounds, then return.

Time - O(2^(n+m))
Space - O(k)

n - number of rows
m - number of columns
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
    const way1 = getMazePaths(n, m, i, j + 1);
    const way2 = getMazePaths(n, m, i + 1, j);
    const result = [];
    for (let k = 0; k < way1.length; k++) {
        result.push("h" + way1[k]);
    }
    for (let k = 0; k < way2.length; k++) {
        result.push("v" + way2[k]);
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
    getMazePaths2(n, m, i, j + 1, curr + "h", result);
    getMazePaths2(n, m, i + 1, j, curr + "v", result);
};

const solve2 = (n, m) => {
    const curr = "", result = [];
    getMazePaths2(n, m, 0, 0, curr, result);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
};