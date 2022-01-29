# [207. Course Schedule](https://leetcode.com/problems/course-schedule/)

## Solution 1 - BFS

```js
const isCyclic = (graph, indegree) => {
    const queue = new Queue();
    let visitedCount = 0;
    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] === 0) {
            visitedCount++;
            queue.push(i);
        }
    }
    while (queue.getSize() > 0) {
        const curr = queue.getFront();
        queue.pop();
        for (const adjacent of graph[curr]) {
            indegree[adjacent]--;
            if (indegree[adjacent] === 0) {
                visitedCount++;
                queue.push(adjacent);
            }
        }
    }
    if (visitedCount !== graph.length) {
        return true;
    }
    return false;
};

const canFinish = function (numCourses, prerequisites) {
    const graph = new Array(numCourses);
    for (let i = 0; i < graph.length; i++) {
        graph[i] = [];
    }
    const indegree = new Array(graph.length).fill(0);
    for (const [curr, adjacent] of prerequisites) {
        graph[adjacent].push(curr);
        indegree[curr]++;
    }
    if (isCyclic(graph, indegree)) {
        return false;
    }
    return true;
};
```

-   Time - `O(n+e)`
-   Space - `O(n+e)`
-   Where `n` is the number of nodes, `e` is the number of edges.

## Solution 2 - DFS

```js
const isCyclic = (graph, visited, active, curr) => {
    visited[curr] = true;
    active[curr] = true;
    for (const adjacent of graph[curr]) {
        if (!visited[adjacent]) {
            if (isCyclic(graph, visited, active, adjacent)) {
                return true;
            }
        } else if (active[adjacent]) {
            return true;
        }
    }
    active[curr] = false;
    return false;
};

const canFinish = function (numCourses, prerequisites) {
    const graph = new Array(numCourses);
    for (let i = 0; i < graph.length; i++) {
        graph[i] = [];
    }
    for (const [curr, adjacent] of prerequisites) {
        graph[adjacent].push(curr);
    }
    const visited = new Array(graph.length).fill(false),
        active = new Array(graph.length).fill(false);
    for (let i = 0; i < visited.length; i++) {
        if (!visited[i]) {
            if (isCyclic(graph, visited, active, i)) {
                return false;
            }
        }
    }
    return true;
};
```

-   Time - `O(n+e)`
-   Space - `O(n+e)`
-   Where `n` is the number of nodes, `e` is the number of edges.
