# [1791. Find Center of Star Graph](https://leetcode.com/problems/find-center-of-star-graph/)

## Solution 1 - Brute force

```js
const findCenter = function (edges) {
    const n = edges.length + 1,
        count = new Array(n + 1).fill(0);
    for (const [curr, adjacent] of edges) {
        count[curr]++;
        count[adjacent]++;
        if (count[curr] === n - 1) {
            return curr;
        } else if (count[adjacent] === n - 1) {
            return adjacent;
        }
    }
};
```

-   Time - `O(e)`
-   Space - `O(n)`
-   Where `n` is the number of nodes, `e` is the number of edges.

## Solution 2 - Optimized

```js
const findCenter = function (edges) {
    if (edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]) {
        return edges[0][0];
    }
    return edges[0][1];
};
```

-   Time - `O(1)`
-   Space - `O(1)`
