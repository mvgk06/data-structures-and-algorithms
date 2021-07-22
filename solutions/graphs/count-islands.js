/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/graphs/count-islands-official/ojquestion

https://leetcode.com/problems/number-of-islands/

Approach

1. DFS
- From each land cell that is not visited, perform dfs to visit the cells.
- Mark the current cell as visited.
- Recursively visit all the adjacent cells of the current cell.
- If the current cell is invalid or visited or is water, then return.
- After visiting all the cells in the current component, increment the result by 1.
- Return the result. 

Time - O(n*m)
Space - O(n*m)

2. BFS
- From each land cell that is not visited, perform bfs to visit the cells.
- Mark the current cell as visited and push it into the queue.
- While the queue is not empty, deque a cell.
- Visit all the adjacent cells of the current cell which are not yet visited and mark them as visited and push them into the queue.
- After visiting all the cells in the current component, increment the result by 1.
- Return the result. 

Time - O(n*m)
Space - O(n*m)

n - number of rows
m - number of columns

*/

/* DFS */

const visitIsland = (graph, visited, i, j) => {
    if (i < 0 || i >= graph.length || j < 0 || j >= graph[i].length || visited[i][j] || graph[i][j] === 1) {
        return;
    }
    visited[i][j] = true;
    visitIsland(graph, visited, i - 1, j);
    visitIsland(graph, visited, i, j + 1);
    visitIsland(graph, visited, i, j - 1);
    visitIsland(graph, visited, i + 1, j);
};

const solve = function (n, graph) {
    const visited = new Array(n);
    for (let i = 0; i < visited.length; i++) {
        visited[i] = new Array(graph[i].length).fill(false);
    }
    let result = 0;
    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            if (graph[i][j] === 0 && !visited[i][j]) {
                visitIsland(graph, visited, i, j);
                result += 1;
            }
        }
    }
    console.log(result);
};

/* BFS */

const Queue = require("../../data-structures/queue.js");

const isValid = (graph, visited, i, j) => {
    return i >= 0 && i < graph.length && j >= 0 && j < graph[i].length && !visited[i][j] && graph[i][j] === 0;
};

const visitIsland2 = (graph, visited, i, j) => {
    const queue = new Queue();
    queue.enque([i, j]);
    visited[i][j] = true;
    const paths = [[-1, 0], [0, 1], [0, -1], [1, 0]];
    while (queue.getSize() > 0) {
        const [row, col] = queue.getFront();
        queue.deque();
        for (let i = 0; i < paths.length; i++) {
            const currRow = row + paths[i][0], currCol = col + paths[i][1];
            if (isValid(graph, visited, currRow, currCol)) {
                visited[currRow][currCol] = true;
                queue.enque([currRow, currCol]);
            }
        }
    }
};

const solve2 = function (n, m, graph) {
    const visited = new Array(n);
    for (let i = 0; i < visited.length; i++) {
        visited[i] = new Array(m).fill(false);
    }
    let result = 0;
    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            if (graph[i][j] === 0 && !visited[i][j]) {
                visitIsland2(graph, visited, i, j);
                result += 1;
            }
        }
    }
    console.log(result);
};