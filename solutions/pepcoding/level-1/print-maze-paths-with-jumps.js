/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/recursion-on-the-way-up/print-maze-path-with-jumps-official/ojquestion

Approach
- At each index, we have three choices either we can go horizontal (right), vertical (bottom) or diagonal (bottomRight).
- And each choice can be made for different jump lengths from 1 to c.
- After making a choice, recursively solve for the smaller sub problems.
- Backtrack, undo the choice that was made (this will be taken care by recursion as numbers are passed by value) and try other choices.
- If cell (n-1,m-1) is reached, then push the current path into the result and return.
- If out of bounds, then return.

Time - O(c*3^a)
Space - O(a+a*b)

n - number of rows
m - number of columns
a - length of the longest path
b - number of paths
c - maximum jump length

*/

const helper = (n, m, i, j, curr, result) => {
    if (i === n - 1 && j === m - 1) {
        result.push(curr);
        return;
    }
    if (i >= n || j >= m) {
        return;
    }
    for (let k = 1; k < m; k++) {
        helper(n, m, i, j + k, curr + `h${k}`, result);
    }
    for (let k = 1; k < n; k++) {
        helper(n, m, i + k, j, curr + `v${k}`, result);
    }
    for (let k = 1; k < n && k < m; k++) {
        helper(n, m, i + k, j + k, curr + `d${k}`, result);
    }
};

const solve = (n, m) => {
    const curr = "", result = [];
    helper(n, m, 0, 0, curr, result);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
};