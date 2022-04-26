# [1091. Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/)

## Solution 1 - BFS

```py
from collections import deque


class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        n = len(grid)
        visited = [[False for j in range(n)] for i in range(n)]
        paths = [[-1, 0], [-1, 1], [0, 1], [1, 1],
                 [1, 0], [1, -1], [0, -1], [-1, -1]]
        return self.helper(n, grid, visited, paths)

    def helper(self, n, grid, visited, paths):
        if grid[0][0] == 1:
            return -1
        q = deque()
        visited[0][0] = True
        q.append([0, 0])
        res = 1
        while q:
            size = len(q)
            for k in range(size):
                [i, j] = q.popleft()
                if i == n-1 and j == n-1:
                    return res
                for [r, c] in paths:
                    row = i+r
                    col = j+c
                    if self.isValid(n, grid, row, col, visited):
                        visited[row][col] = True
                        q.append([row, col])
            res += 1
        return -1

    def isValid(self, n, grid, i, j, visited):
        return i >= 0 and i < n and j >= 0 and j < n and grid[i][j] == 0 and not visited[i][j]
```

- Time - `O(n^2)`
- Space - `O(n^2)`
- Where `n` is the number of the rows and columns.