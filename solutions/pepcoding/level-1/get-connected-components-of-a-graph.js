/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/graphs/gcc-official/ojquestion

Approach

1. DFS
- For each unvisited node perform dfs to visit the nodes.
- Mark the current node as visited and push it into the path array.
- Recursively visit all the adjacent nodes of the current node.
- If the current node is visited, then return.
- After visiting all the nodes in the current component push the path into the result array.
- Return the result. 

Time - O(n+e)
Space - O(n+e)

2. BFS
- For each unvisited node perform bfs to visit the nodes.
- Mark the current node as visited and enque it into the queue.
- While the queue is not empty, deque a node and push it into the path array.
- Visit all the adjacent nodes of the current node which are not yet visited and mark them as visited and enque them into the queue.
- After visiting all the nodes in the current component push the path into the result array.
- Return the result.

Time - O(n+e)
Space - O(n+e)

n - number of nodes
e - number of edges

*/

/* DFS */

const getConnectedComponents = (graph, curr, visited, path) => {
    if (visited[curr]) {
        return;
    }
    visited[curr] = true;
    path.push(curr);
    for (const adjacent of graph[curr]) {
        getConnectedComponents(graph, adjacent, visited, path);
    }
};

const solve = (n, graph) => {
    const visited = new Array(n).fill(false);
    const result = [];
    for (let i = 0; i < visited.length; i++) {
        if (!visited[i]) {
            const path = [];
            getConnectedComponents(graph, i, visited, path);
            result.push(path);
        }
    }
    console.log(result);
};

/* BFS */

const Queue = require("../../../data-structures/queue.js");

const getConnectedComponents2 = (graph, src, visited, path) => {
    const queue = new Queue();
    visited[src] = true;
    queue.enque(src);
    while (queue.getSize() > 0) {
        const curr = queue.getFront();
        queue.deque();
        path.push(curr);
        for (const adjacent of graph[curr]) {
            if (!visited[adjacent]) {
                visited[adjacent] = true;
                queue.enque(adjacent);
            }
        }
    }
};

const solve2 = (n, graph) => {
    const visited = new Array(n).fill(false);
    const result = [];
    for (let i = 0; i < visited.length; i++) {
        if (!visited[i]) {
            const path = [];
            getConnectedComponents2(graph, i, visited, path);
            result.push(path);
        }
    }
    console.log(result);
};