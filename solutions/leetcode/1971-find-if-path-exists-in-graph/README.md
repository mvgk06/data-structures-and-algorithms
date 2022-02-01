# [1971. Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/)

## Solution 1 - DFS

```js
const dfs = (graph, curr, dest, visited) => {
    if (curr === dest) {
        return true;
    }
    visited[curr] = true;
    for (const adjacent of graph[curr]) {
        if (!visited[adjacent]) {
            if (dfs(graph, adjacent, dest, visited)) {
                return true;
            }
        }
    }
    return false;
};

const validPath = function (n, edges, source, destination) {
    const graph = new Array(n);
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }
    for (const [curr, adjacent] of edges) {
        graph[curr].push(adjacent);
        graph[adjacent].push(curr);
    }
    const visited = new Array(n).fill(false);
    return dfs(graph, source, destination, visited);
};
```

-   Time - `O(n+e)`
-   Space - `O(n+e)`
-   Where `n` is the number of nodes, `e` is the number of edges.

## Solution 2 - BFS

```js
const bfs = (graph, src, dest, visited) => {
    const queue = new Queue();
    visited[src] = true;
    queue.push(src);
    while (queue.getSize() > 0) {
        const curr = queue.getFront();
        queue.pop();
        if (curr === dest) {
            return true;
        }
        for (const adjacent of graph[curr]) {
            if (!visited[adjacent]) {
                visited[adjacent] = true;
                queue.push(adjacent);
            }
        }
    }
    return false;
};

const validPath = function (n, edges, source, destination) {
    const graph = new Array(n);
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }
    for (const [curr, adjacent] of edges) {
        graph[curr].push(adjacent);
        graph[adjacent].push(curr);
    }
    const visited = new Array(n).fill(false);
    return bfs(graph, source, destination, visited);
};
```

-   Time - `O(n+e)`
-   Space - `O(n+e)`
-   Where `n` is the number of nodes, `e` is the number of edges.

## Solution 3 - Disjoint set

```js
const validPath = function (n, edges, source, destination) {
    const ds = new DisjointSet(n);
    for (const [curr, adjacent] of edges) {
        const currRep = ds.find(curr),
            adjacentRep = ds.find(adjacent);
        if (currRep !== adjacentRep) {
            ds.union(curr, adjacent);
        }
    }
    const srcRep = ds.find(source),
        destRep = ds.find(destination);
    return srcRep === destRep;
};
```

-   Time - `O(e)`
-   Space - `O(n)`
-   Where `n` is the number of nodes, `e` is the number of edges.
