# [200. Number of Islands](https://leetcode.com/problems/number-of-islands/)

## Solution 1 - DFS

```js
const dfs = (graph, visited, paths, i, j) => {
    if (
        i < 0 ||
        i >= graph.length ||
        j < 0 ||
        j >= graph[i].length ||
        visited[i][j] ||
        graph[i][j] === '0'
    ) {
        return;
    }
    visited[i][j] = true;
    for (let k = 0; k < paths.length; k++) {
        const row = i + paths[k][0],
            col = j + paths[k][1];
        dfs(graph, visited, paths, row, col);
    }
};

const numIslands = function (graph) {
    const n = graph.length;
    const visited = new Array(n);
    for (let i = 0; i < visited.length; i++) {
        visited[i] = new Array(graph[i].length).fill(false);
    }
    const paths = [
        [-1, 0],
        [0, 1],
        [0, -1],
        [1, 0],
    ];
    let result = 0;
    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            if (graph[i][j] === '1' && !visited[i][j]) {
                dfs(graph, visited, paths, i, j);
                result += 1;
            }
        }
    }
    return result;
};
```

-   Time - `O(n*m)`
-   Space - `O(n*m)`
-   Where `n` is the number of rows, `m` is the number of columns.

## Solution 2 - BFS

```js
const isValid = (graph, visited, i, j) => {
    return (
        i >= 0 &&
        i < graph.length &&
        j >= 0 &&
        j < graph[i].length &&
        !visited[i][j] &&
        graph[i][j] === '1'
    );
};

const bfs = (graph, visited, paths, i, j) => {
    const queue = new Queue();
    queue.push([i, j]);
    visited[i][j] = true;
    while (queue.getSize() > 0) {
        const [row, col] = queue.getFront();
        queue.pop();
        for (let i = 0; i < paths.length; i++) {
            const currRow = row + paths[i][0],
                currCol = col + paths[i][1];
            if (isValid(graph, visited, currRow, currCol)) {
                visited[currRow][currcol] = true;
                queue.push([currRow, currCol]);
            }
        }
    }
};

const numIslands = function (graph) {
    const n = graph.length;
    const visited = new Array(n);
    for (let i = 0; i < visited.length; i++) {
        visited[i] = new Array(graph[i].length).fill(false);
    }
    const paths = [
        [-1, 0],
        [0, 1],
        [0, -1],
        [1, 0],
    ];
    let result = 0;
    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            if (graph[i][j] === '1' && !visited[i][j]) {
                bfs(graph, visited, paths, i, j);
                result += 1;
            }
        }
    }
    return result;
};
```

-   Time - `O(n*m)`
-   Space - `O(n*m)`
-   Where `n` is the number of rows, `m` is the number of columns.
