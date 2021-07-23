/*

Problem

https://leetcode.com/problems/max-area-of-island/

Approach

1. DFS
- From each land cell which is not yet visited perform dfs to compute the area of the current connected component.
- Return the maximum area of all the connected components.

Time - O(n*m)
Space - O(n*m)

2. BFS
- From each land cell which is not yet visited perform bfs to compute the area of the current connected component.
- Return the maximum area of all the connected components.

Time - O(n*m)
Space - O(n*m)

n - number of rows
m - number of columns

*/

/* DFS */

const areaOfIsland = (grid, visited, i, j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || visited[i][j] || grid[i][j] === 0) {
        return 0;
    }
    visited[i][j] = true;
    const left = areaOfIsland(grid, visited, i, j - 1);
    const top = areaOfIsland(grid, visited, i - 1, j);
    const right = areaOfIsland(grid, visited, i, j + 1);
    const bottom = areaOfIsland(grid, visited, i + 1, j);
    return 1 + top + right + bottom + left;
};

const maxAreaOfIsland = function (grid) {
    const visited = new Array(grid.length);
    for (let i = 0; i < visited.length; i++) {
        visited[i] = new Array(grid[i].length).fill(false);
    }
    let result = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                result = Math.max(result, areaOfIsland(grid, visited, i, j));
            }
        }
    }
    return result;
};


/* BFS */

const Queue = require("../../data-structures/queue.js");

const isValid = (grid, visited, i, j) => {
    return i >= 0 && i < grid.length && j >= 0 && j < grid[i].length && !visited[i][j] && grid[i][j] === 1;
};

const areaOfIsland2 = (grid, visited, i, j) => {
    const queue = new Queue();
    visited[i][j] = true;
    queue.enque([i, j]);
    const paths = [[0, -1], [-1, 0], [0, 1], [1, 0]];
    let result = 0;
    while (queue.getSize() > 0) {
        const [row, col] = queue.getFront();
        queue.deque();
        result += 1;
        for (let i = 0; i < paths.length; i++) {
            const currRow = row + paths[i][0], currCol = col + paths[i][1];
            if (isValid(grid, visited, currRow, currCol)) {
                visited[currRow][currCol] = true;
                queue.enque([currRow, currCol]);
            }
        }
    }
    return result;
};

const maxAreaOfIsland2 = function (grid) {
    const visited = new Array(grid.length);
    for (let i = 0; i < visited.length; i++) {
        visited[i] = new Array(grid[i].length).fill(false);
    }
    let result = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                result = Math.max(result, areaOfIsland2(grid, visited, i, j));
            }
        }
    }
    return result;
};