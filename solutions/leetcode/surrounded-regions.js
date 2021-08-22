/*

Problem

https://leetcode.com/problems/surrounded-regions/

Approach

1. DFS
- Perform dfs from the boundary where the cell has "O".
- Recursively visit all the adjacent cells that has "O" and mark them as "A".
- Traverse the board and convert all the "O" to "X" and all the "A" back to "O".

Time - O(n*m)
Space - O(n*m)

2. BFS
- Enque all the boundary cells that has "O" into the queue.
- Perform bfs from the sources, visit all the adjacent cells that has "O" and mark them as "A".
- Traverse the board and convert all the "O" to "X" and all the "A" back to "O".

Time - O(n*m)
Space - O(n*m)

n - number of rows
m - number of columns

*/

/* DFS */

const dfs = (board, visited, paths, i, j) => {
    if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] === "X" || visited[i][j]) {
        return;
    }
    visited[i][j] = true;
    board[i][j] = "A";
    for (let k = 0; k < paths.length; k++) {
        const row = i + paths[k][0], col = j + paths[k][1];
        dfs(board, visited, paths, row, col);
    }
};

const solve = function (board) {
    const n = board.length, m = board[0].length, visited = new Array(n);
    for (let i = 0; i < n; i++) {
        visited[i] = new Array(m).fill(false);
    }
    const paths = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === "O" && (i === 0 || i === n - 1 || j === 0 || j === m - 1)) {
                dfs(board, visited, paths, i, j);
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === "O") {
                board[i][j] = "X";
            }
            else if (board[i][j] === "A") {
                board[i][j] = "O";
            }
        }
    }
};

/* BFS */

const Queue = require("../../data-structures/queue");

const isValid = (board, visited, i, j) => {
    return i >= 0 && i < board.length && j >= 0 && j < board[i].length && board[i][j] === "O" && !visited[i][j];
};

const bfs = (board, visited, paths, queue) => {
    while (queue.getSize() > 0) {
        const [row, col] = queue.getFront();
        queue.deque();
        board[row][col] = "A";
        for (let k = 0; k < paths.length; k++) {
            const currRow = row + paths[k][0], currCol = col + paths[k][1];
            if (isValid(board, visited, currRow, currCol)) {
                visited[currRow][currCol] = true;
                queue.enque([currRow, currCol]);
            }
        }
    }
};

const solve2 = function (board) {
    const n = board.length, m = board[0].length, visited = new Array(n);
    for (let i = 0; i < n; i++) {
        visited[i] = new Array(m).fill(false);
    }
    const paths = [[1, 0], [0, 1], [-1, 0], [0, -1]], queue = new Queue();
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === "O" && (i === 0 || i === n - 1 || j === 0 || j === m - 1)) {
                queue.enque([i, j]);
                visited[i][j] = true;
            }
        }
    }
    bfs(board, visited, paths, queue);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === "O") {
                board[i][j] = "X";
            }
            else if (board[i][j] === "A") {
                board[i][j] = "O";
            }
        }
    }
};