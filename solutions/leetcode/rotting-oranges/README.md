# [994. Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)

## Solution 1 - BFS

```py
from collections import deque


class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        m = len(grid)
        n = len(grid[0])
        visited = [[False for j in range(n)] for i in range(m)]
        paths = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        return self.helper(m, n, grid, visited, paths)

    def helper(self, m, n, grid, visited, paths):
        q = deque()
        fresh = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 2:
                    visited[i][j] = True
                    q.append([i, j])
                elif grid[i][j] == 1:
                    fresh += 1
        res = 0
        while q:
            size = len(q)
            for k in range(size):
                [i, j] = q.popleft()
                for [r, c] in paths:
                    row = i+r
                    col = j+c
                    if self.isValid(m, n, grid, row, col, visited):
                        visited[row][col] = True
                        q.append([row, col])
                        fresh -= 1
            res += 1
        if fresh == 0:
            if res == 0:
                return 0
            return res-1
        return -1

    def isValid(self, m, n, grid, i, j, visited):
        return i >= 0 and i < m and j >= 0 and j < n and grid[i][j] == 1 and not visited[i][j]
```

- Time - `O(m*n)`
- Space - `O(m*n)`
- Where `m` is the number of rows and `n` is the number of columns.