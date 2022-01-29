# [785. Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/)

## Solution 1 - DFS

```js
const dfs = (graph, colors, curr, color) => {
    if (colors[curr] === -1) {
        colors[curr] = color;
    }
    for (const adjacent of graph[curr]) {
        if (colors[adjacent] === -1) {
            const isBipartite = dfs(graph, colors, adjacent, colors[curr] === 0 ? 1 : 0);
            if (!isBipartite) {
                return false;
            }
        } else if (colors[adjacent] === colors[curr]) {
            return false;
        }
    }
    return true;
};

const isBipartite = function (graph) {
    const n = graph.length;
    const colors = new Array(n).fill(-1);
    for (let i = 0; i < colors.length; i++) {
        if (colors[i] === -1) {
            if (!dfs(graph, colors, i, 0)) {
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

## Solution 2 - BFS

```js
const bfs = (graph, colors, src) => {
    const queue = new Queue();
    queue.push(src);
    colors[src] = 0;
    while (queue.getSize() > 0) {
        const curr = queue.getFront();
        queue.pop();
        for (const adjacent of graph[curr]) {
            if (colors[adjacent] === -1) {
                colors[adjacent] = colors[curr] === 0 ? 1 : 0;
                queue.push(adjacent);
            } else if (colors[adjacent] === colors[curr]) {
                return false;
            }
        }
    }
    return true;
};

const isBipartite = function (graph) {
    const n = graph.length;
    const colors = new Array(n).fill(-1);
    for (let i = 0; i < colors.length; i++) {
        if (colors[i] === -1) {
            if (!bfs(graph, colors, i)) {
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
