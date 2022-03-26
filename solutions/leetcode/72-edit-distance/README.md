# [72. Edit Distance](https://leetcode.com/problems/edit-distance/)

## Solution 1 - Top down DP

```py
class Solution:
    def minDistance(self, w1: str, w2: str) -> int:
        n = len(w1)
        m = len(w2)
        memo = [[-1 for j in range(m)] for i in range(n)]
        return self.helper(w1, w2, n-1, m-1, memo)

    def helper(self, w1, w2, i, j, memo):
        if i < 0:
            return j+1
        if j < 0:
            return i+1
        if memo[i][j] != -1:
            return memo[i][j]
        if w1[i] == w2[j]:
            memo[i][j] = self.helper(w1, w2, i-1, j-1, memo)
        else:
            insert = self.helper(w1, w2, i, j-1, memo)
            delete = self.helper(w1, w2, i-1, j, memo)
            replace = self.helper(w1, w2, i-1, j-1, memo)
            memo[i][j] = 1+min(insert, delete, replace)
        return memo[i][j]
```

- The `memo[i][j]` represents the minimum number of operations to convert the string till `i`, `j`.
- At each index, we can either move both the pointers or one of the pointer.
- Time - `O(n*m)`
- Space - `O(n*m)`
- Where `n` and `m` are the length of the two strings.

## Solution 2 - Bottom up DP

```py
class Solution:
    def minDistance(self, w1: str, w2: str) -> int:
        n = len(w1)
        m = len(w2)
        memo = [[0 for j in range(m+1)] for i in range(n+1)]
        for i in range(1, n+1):
            memo[i][0] = i
        for j in range(1, m+1):
            memo[0][j] = j
        for i in range(1, n+1):
            for j in range(1, m+1):
                if w1[i-1] == w2[j-1]:
                    memo[i][j] = memo[i-1][j-1]
                else:
                    insert = memo[i][j-1]
                    delete = memo[i-1][j]
                    replace = memo[i-1][j-1]
                    memo[i][j] = 1+min(insert, delete, replace)
        return memo[n][m]
```

- The `memo[i][j]` represents the minimum number of operations to convert the string when the size of the strings are `i` and `j`.
- At each index, we can either move both the pointers or one of the pointer.
- Time - `O(n*m)`
- Space - `O(n*m)`
- Where `n` and `m` are the length of the two strings.

## Solution 3 - Bottom up DP (space optimized)

```py
class Solution:
    def minDistance(self, w1: str, w2: str) -> int:
        n = len(w1)
        m = len(w2)
        prev = [j for j in range(m+1)]
        for i in range(1, n+1):
            curr = [0 for j in range(m+1)]
            curr[0] = i
            for j in range(1, m+1):
                if w1[i-1] == w2[j-1]:
                    curr[j] = prev[j-1]
                else:
                    insert = curr[j-1]
                    delete = prev[j]
                    replace = prev[j-1]
                    curr[j] = 1+min(insert, delete, replace)
            prev = curr
        return prev[m]
```

- Time - `O(n*m)`
- Space - `O(m)`
- Where `n` and `m` are the length of the two strings.