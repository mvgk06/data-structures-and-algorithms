# [1192. Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/)

## Solution 1 - DFS

```js
const dfs = (graph, curr, parent, currTime, visited, time, low, result) => {
    visited[curr] = true;
    time[curr] = currTime;
    low[curr] = currTime;
    for (const adjacent of graph[curr]) {
        if (!visited[adjacent]) {
            dfs(graph, adjacent, curr, currTime + 1, visited, time, low, result);
            low[curr] = Math.min(low[curr], low[adjacent]);
            if (low[adjacent] > time[curr]) {
                result.push([curr, adjacent]);
            }
        } else if (adjacent !== parent) {
            low[curr] = Math.min(low[curr], time[adjacent]);
        }
    }
};

const criticalConnections = function (n, connections) {
    const graph = new Array(n);
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }
    for (const [curr, adjacent] of connections) {
        graph[curr].push(adjacent);
        graph[adjacent].push(curr);
    }
    const visited = new Array(n).fill(false),
        time = new Array(n),
        low = new Array(n),
        result = [];
    dfs(graph, 0, -1, 0, visited, time, low, result);
    return result;
};
```

-   Time - `O(n+e)`
-   Space - `O(n+e)`
-   Where `n` is the number of nodes, `e` is the number of edges.
