/*

Problem

https://leetcode.com/problems/number-of-closed-islands/

Approach

1. DFS
- From each land cell which is not yet visited perform dfs to visit the nodes.
- If all the cells in the current component are surrounded by water, then return true and increment the result by 1.
- Else return false.
- Return the result.

Time - O(n*m)
Space - O(n*m)

2. BFS
- From each land cell which is not yet visited perform bfs to visit the nodes.
- If all the cells in the current component are surrounded by water, then return true and increment the result by 1.
- Else return false.
- Return the result.

Time - O(n*m)
Space - O(n*m)

n - number of rows
m - number of columns

*/

/* DFS */

const visitIslands = (grid, visited, i, j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length) {
        return false;
    }
    if (visited[i][j] || grid[i][j] === 1) {
        return true;
    }
    visited[i][j] = true;
    const left = visitIslands(grid, visited, i, j - 1);
    const top = visitIslands(grid, visited, i - 1, j);
    const right = visitIslands(grid, visited, i, j + 1);
    const bottom = visitIslands(grid, visited, i + 1, j);
    return (left && top && right && bottom);
};

const closedIsland = function (grid) {
    const visited = new Array(grid.length);
    for (let i = 0; i < visited.length; i++) {
        visited[i] = new Array(grid[i].length).fill(false);
    }
    let result = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 0 && !visited[i][j]) {
                if (visitIslands(grid, visited, i, j)) {
                    result += 1;
                }
            }
        }
    }
    return result;
};

/* BFS */

const Queue = require("../../data-structures/queue.js");

const isValid = (grid, visited, i, j) => {
    return i >= 0 && i < grid.length && j >= 0 && j < grid[i].length && !visited[i][j] && grid[i][j] === 0;
};

const isNotBounded = (grid, i, j) => {
    return i < 0 || i >= grid.length || j < 0 || j >= grid[i].length;
};

const visitIslands2 = (grid, visited, i, j) => {
    const queue = new Queue();
    visited[i][j] = true;
    queue.enque([i, j]);
    const paths = [[0, -1], [-1, 0], [0, 1], [1, 0]];
    let result = true;
    while (queue.getSize() > 0) {
        const [row, col] = queue.getFront();
        queue.deque();
        for (let i = 0; i < paths.length; i++) {
            const currRow = row + paths[i][0], currCol = col + paths[i][1];
            if (isValid(grid, visited, currRow, currCol)) {
                visited[currRow][currCol] = true;
                queue.enque([currRow, currCol]);
            }
            if (isNotBounded(grid, currRow, currCol)) {
                result = false;
            }
        }
    }
    return result;
};

const closedIsland2 = function (grid) {
    const visited = new Array(grid.length);
    for (let i = 0; i < grid.length; i++) {
        visited[i] = new Array(grid[i].length).fill(false);
    }
    let result = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 0 && !visited[i][j]) {
                if (visitIslands2(grid, visited, i, j)) {
                    result += 1;
                }
            }
        }
    }
    return result;
};