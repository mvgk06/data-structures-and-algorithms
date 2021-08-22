/*

Problem

https://leetcode.com/problems/time-needed-to-inform-all-employees/

Approach

1. DFS
- Construct the graph.
- Perform dfs from the headID.
- Update the result based on the time taken to pass the information to the adjacent nodes.
- Recursively visit all the adjacent nodes of the current node which are not yet visited and update the time taken.
- Return the result.

Time - O(n+e)
Space - O(n+e)

2. BFS
- Construct the graph.
- Perform bfs from the headID.
- Enque the current node into the queue along with the time taken to pass the information to the adjacent nodes as 0.
- While the queue is not empty, deque the node and the time taken.
- Update the result based on the time taken.
- Visit all the adjacent nodes of the current node which are not yet visited, enque them into the queue along with the updated time.
- Return the result.

Time - O(n+e)
Space - O(n+e)

n - number of nodes
e - number of edges

*/

/* DFS */

const numOfMinutes = function (n, headID, manager, informTime) {
    const graph = new Array(n);
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }
    for (let i = 0; i < manager.length; i++) {
        if (manager[i] != -1) {
            graph[manager[i]].push(i);
        }
    }
    let result = 0;
    const dfs = (curr, currTime) => {
        result = Math.max(result, currTime);
        for (const adjacent of graph[curr]) {
            dfs(adjacent, currTime + informTime[curr]);
        }
    };
    dfs(headID, 0);
    return result;
};

/* BFS */

const Queue = require("../../data-structures/queue");

const bfs = (graph, head, informTime) => {
    const queue = new Queue();
    queue.enque([head, 0]);
    let result = 0;
    while (queue.getSize() > 0) {
        const [curr, currTime] = queue.getFront();
        queue.deque();
        result = Math.max(result, currTime);
        for (const adjacent of graph[curr]) {
            queue.enque([adjacent, currTime + informTime[curr]]);
        }
    }
    return result;
};

const numOfMinutes2 = function (n, headID, manager, informTime) {
    const graph = new Array(n);
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }
    for (let i = 0; i < manager.length; i++) {
        if (manager[i] != -1) {
            graph[manager[i]].push(i);
        }
    }
    return bfs(graph, headID, informTime);
};