/*

Problem

https://leetcode.com/problems/keys-and-rooms/

Approach

1. DFS
- Perform dfs from the node 0.
- Mark the current node as visited.
- Recursively visit all the adjacent nodes of the current node which are not yet visited.
- If all the nodes are visited then return true else return false.

Time - O(n+e)
Space - O(n+e)

2. BFS
- Perform bfs from the node 0.
- Mark the current node as visited and enque it into the queue.
- While the queue is not empty, deque the node.
- Visit all the adjacent nodes of the current node which are not yet visited, mark them as visited and enque them into the queue.
- If all the nodes are visited then return true else return false.

Time - O(n+e)
Space - O(n+e)

n - number of nodes
e - number of edges

*/

/* DFS */

const dfs = (graph, visited, curr) => {
    visited[curr] = true;
    for (const adjacent of graph[curr]) {
        if (!visited[adjacent]) {
            dfs(graph, visited, adjacent);
        }
    }
};

const canVisitAllRooms = function (rooms) {
    const visited = new Array(rooms.length).fill(false);
    dfs(rooms, visited, 0);
    for (let i = 0; i < visited.length; i++) {
        if (!visited[i]) {
            return false;
        }
    }
    return true;
};

/* BFS */

const Queue = require("../../data-structures/queue");

const bfs = (graph, visited, src) => {
    const queue = new Queue();
    visited[src] = true;
    queue.enque(src);
    while (queue.getSize() > 0) {
        const curr = queue.getFront();
        queue.deque();
        for (const adjacent of graph[curr]) {
            if (!visited[adjacent]) {
                visited[adjacent] = true;
                queue.enque(adjacent);
            }
        }
    }
};

const canVisitAllRooms2 = function (rooms) {
    const visited = new Array(rooms.length).fill(false);
    bfs(rooms, visited, 0);
    for (let i = 0; i < visited.length; i++) {
        if (!visited[i]) {
            return false;
        }
    }
    return true;
};