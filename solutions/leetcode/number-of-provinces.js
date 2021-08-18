/*

Problem

https://leetcode.com/problems/number-of-provinces/

Approach

1. DFS
- From each node that is not visited, perform dfs to visit the nodes.
- Mark the current node as visited.
- Recursively visit all the adjacent nodes of the current node which are not yet visited.
- After visiting all the nodes in the current component, increment the result by 1.
- Return the result. 

Time - O(n^2)
Space - O(n)

2. BFS
- From each node that is not visited, perform bfs to visit the nodes.
- Mark the current node as visited and enque it into the queue.
- While the queue is not empty, deque a node.
- Visit all the adjacent nodes of the current node which are not yet visited and mark them as visited and enque them into the queue.
- After visiting all the nodes in the current component, increment the result by 1.
- Return the result. 

Time - O(n^2)
Space - O(n)

n - number of nodes

*/

/* DFS */

const dfs = (grid, visited, i) => {
    visited[i] = true;
    for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 1 && !visited[j]) {
            dfs(grid, visited, j);
        }
    }
};

const findCircleNum = function (isConnected) {
    const n = isConnected.length, visited = new Array(n);
    visited.fill(false);
    let result = 0;
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(isConnected, visited, i);
            result++;
        }
    }
    return result;
};

/* BFS */

const Queue = require("../../data-structures/queue.js");

const bfs = (grid, visited, i) => {
    const queue = new Queue();
    visited[i] = true;
    queue.enque(i);
    while (queue.getSize() > 0) {
        const curr = queue.getFront();
        queue.deque();
        for (let j = 0; j < grid[curr].length; j++) {
            if (grid[curr][j] === 1 && !visited[j]) {
                visited[j] = true;
                queue.enque(j);
            }
        }
    }
};

const findCircleNum2 = function (isConnected) {
    const n = isConnected.length, visited = new Array(n);
    visited.fill(false);
    let result = 0;
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            bfs(isConnected, visited, i);
            result++;
        }
    }
    return result;
};