# [62. Unique Paths](https://leetcode.com/problems/unique-paths/)

## Solution 1 - Top down DP

```py
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        memo = [[-1 for j in range(n)] for i in range(m)]
        return self.helper(m, n, 0, 0, memo)

    def helper(self, m, n, i, j, memo):
        if i >= m or j >= n:
            return 0
        if i == m - 1 and j == n - 1:
            return 1
        if memo[i][j] != -1:
            return memo[i][j]
        right = self.helper(m, n, i, j + 1, memo)
        down = self.helper(m, n, i + 1, j, memo)
        memo[i][j] = right + down
        return memo[i][j]
```

-   The `memo[i][j]` represents the number of ways to reach the destination cell from `(i, j)`.
-   From each cell, we can either go right or down.
-   Time - `O(m*n)`
-   Space - `O(m*n)`
-   Where `m` is the number of rows, `n` is the number of columns.

## Solution 2 - Bottom up DP

```py
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        memo = [[0 for j in range(n)] for i in range(m)]
        for j in range(n):
            memo[m-1][j] = 1
        for i in range(m):
            memo[i][n-1] = 1
        for i in range(m-2, -1, -1):
            for j in range(n-2, -1, -1):
                memo[i][j] = memo[i][j+1]+memo[i+1][j]
        return memo[0][0]
```

-   The `memo[i][j]` represents the number of ways to reach the destination cell from `(i, j)`.
-   From each cell, we can either go right or down.
-   Time - `O(m*n)`
-   Space - `O(m*n)`
-   Where `m` is the number of rows, `n` is the number of columns.

## Solution 3 - Bottom up DP (space optimized)

```py
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        nextRow = [0 for j in range(n)]
        nextRow[n-1] = 1
        for i in range(m-1, -1, -1):
            currRow = [0 for j in range(n)]
            currRow[n-1] = 1
            for j in range(n-2, -1, -1):
                currRow[j] = currRow[j+1]+nextRow[j]
            nextRow = currRow
        return nextRow[0]
```

-   Time - `O(m*n)`
-   Space - `O(n)`
-   Where `m` is the number of rows, `n` is the number of columns.
