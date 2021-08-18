/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/graphs/bfs-graph-official/ojquestion

Approach
- Mark the current node as visited and enque it into the queue.
- While the queue is not empty, deque the node and the path.
- Print the node along with the path so far.
- Visit all the adjacent nodes of the current node which are not yet visited, mark them as visited and enque them into the queue along with the updated path.

Time - O(n+e)
Space - O(n+e)

n - number of nodes
e - number of edges

*/

const Queue = require("../../../data-structures/queue");

const bfs = (graph, visited, src) => {
    const queue = new Queue();
    visited[src] = true;
    queue.enque([src, src.toString()]);
    while (queue.getSize() > 0) {
        const [curr, path] = queue.getFront();
        queue.deque();
        console.log(curr.toString() + "@" + path);
        for (const adjacent of graph[curr]) {
            if (!visited[adjacent]) {
                visited[adjacent] = true;
                queue.enque([adjacent, path + adjacent.toString()]);
            }
        }
    }
};

const solve = (graph, src) => {
    const visited = new Array(n).fill(false);
    bfs(graph, visited, src);
};