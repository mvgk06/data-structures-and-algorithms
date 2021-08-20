/*

Problem

https://leetcode.com/problems/rotting-oranges/

Approach
- Enque all the position of the cells that contains rotten oranges into the queue.
- Initialize the time taken to rot the oranges as -1. 
- While the queue is not empty, deque a cell.
- Visit all the adjacent cells and rot the oranges in that cell and enque their positions into the queue.
- Increment the time taken.
- If all the oranges got rotten, then return the time taken.
- Else return -1.

Time - O(n*m)
Space - O(n*m)

n - number of rows
m - number of columns

*/

const Queue = require("../../data-structures/queue");

const isValid = (grid, i, j) => {
    return i >= 0 && i < grid.length && j >= 0 && j < grid[i].length && grid[i][j] === 1;
};

const orangesRotting = function (grid) {
    let n = grid.length, m = grid[0].length;
    const queue = new Queue();
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 2) {
                queue.enque([i, j]);
            }
        }
    }
    const paths = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let time = -1;
    while (queue.getSize() > 0) {
        const size = queue.getSize();
        for (let i = 0; i < size; i++) {
            const [row, col] = queue.getFront();
            queue.deque();
            for (let i = 0; i < paths.length; i++) {
                const currRow = row + paths[i][0], currCol = col + paths[i][1];
                if (isValid(grid, currRow, currCol)) {
                    grid[currRow][currCol] = 2;
                    queue.enque([currRow, currCol]);
                }
            }
        }
        time += 1;
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }
    }
    if (time === -1) {
        return 0;
    }
    return time;
};