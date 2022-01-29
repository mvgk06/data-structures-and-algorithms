# [210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)

## Solution 1 - BFS

```js
const bfs = (graph, indegree, result) => {
    const queue = new Queue();
    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }
    while (queue.getSize() > 0) {
        const curr = queue.getFront();
        queue.pop();
        result.push(curr);
        for (const adjacent of graph[curr]) {
            indegree[adjacent]--;
            if (indegree[adjacent] === 0) {
                queue.push(adjacent);
            }
        }
    }
    if (result.length !== graph.length) {
        return false;
    }
    return true;
};

const findOrder = function (numCourses, prerequisites) {
    const graph = new Array(numCourses);
    for (let i = 0; i < graph.length; i++) {
        graph[i] = [];
    }
    const indegree = new Array(graph.length).fill(0);
    for (const [curr, adjacent] of prerequisites) {
        graph[adjacent].push(curr);
        indegree[curr]++;
    }
    const result = [];
    if (bfs(graph, indegree, result)) {
        return result;
    }
    return [];
};
```

-   Time - `O(n+e)`
-   Space - `O(n+e)`
-   Where `n` is the number of nodes, `e` is the number of edges.

## Solution 2 - DFS

```js
const dfs = (graph, visited, active, curr, stack) => {
    visited[curr] = true;
    active[curr] = true;
    for (const adjacent of graph[curr]) {
        if (!visited[adjacent]) {
            if (!dfs(graph, visited, active, adjacent, stack)) {
                return false;
            }
        } else if (active[adjacent]) {
            return false;
        }
    }
    stack.push(curr);
    active[curr] = false;
    return true;
};

const findOrder = function (numCourses, prerequisites) {
    const graph = new Array(numCourses);
    for (let i = 0; i < graph.length; i++) {
        graph[i] = [];
    }
    for (const [curr, adjacent] of prerequisites) {
        graph[adjacent].push(curr);
    }
    const visited = new Array(graph.length).fill(false),
        active = new Array(graph.length).fill(false),
        stack = [];
    for (let i = 0; i < visited.length; i++) {
        if (!visited[i]) {
            if (!dfs(graph, visited, active, i, stack)) {
                return [];
            }
        }
    }
    return stack.reverse();
};
```

-   Time - `O(n+e)`
-   Space - `O(n+e)`
-   Where `n` is the number of nodes, `e` is the number of edges.
