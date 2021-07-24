/*

Problem

https://leetcode.com/problems/employee-importance/

Approach

1. DFS
- Construct the graph.
- Perform dfs and add the importance of all the subordinates of the given employee id.
- Return the result.

Time - O(n+e)
Space - O(n+e)

2. BFS
- Construct the graph.
- Perform bfs and add the importance of all the subordinates of the given employee id.
- Return the result.

Time - O(n+e)
Space - O(n+e)

n - number of nodes
e - number of edges

*/

/* DFS */

const GetImportance = function (emp, id) {
    const graph = new Array(id + 1);
    for (let i = 0; i < graph.length; i++) {
        if (emp[i]) {
            graph[emp[i].id] = [emp[i].importance, emp[i].subordinates];
        }
    }
    let result = 0;
    const getImportanceHelper = (curr) => {
        result += graph[curr][0];
        for (const adj of graph[curr][1]) {
            getImportanceHelper(adj);
        }
    };
    getImportanceHelper(id);
    return result;
};

/* BFS */

const Queue = require("../../data-structures/queue.js");

const getImportanceHelper2 = (graph, src) => {
    const queue = new Queue();
    queue.enque(src);
    let result = 0;
    while (queue.getSize() > 0) {
        const curr = queue.getFront();
        queue.deque();
        result += graph[curr][0];
        for (const adj of graph[curr][1]) {
            queue.enque(adj);
        }
    }
    return result;
};

const GetImportance2 = function (emp, id) {
    const graph = new Array(id + 1);
    for (let i = 0; i < graph.length; i++) {
        if (emp[i]) {
            graph[emp[i].id] = [emp[i].importance, emp[i].subordinates];
        }
    }
    const result = getImportanceHelper2(graph, id);
    return result;
};