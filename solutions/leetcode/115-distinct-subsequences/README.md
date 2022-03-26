# [115. Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/)

## Solution 1 - Top down DP

```py
class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        n = len(s)
        m = len(t)
        memo = [[-1 for j in range(m)] for i in range(n)]
        return self.helper(s, t, n-1, m-1, memo)

    def helper(self, s, t, i, j, memo):
        if j < 0:
            return 1
        if i < 0:
            return 0
        if memo[i][j] != -1:
            return memo[i][j]
        if s[i] == t[j]:
            memo[i][j] = self.helper(s, t, i-1, j-1, memo)+self.helper(s, t, i-1, j, memo)
        else:
            memo[i][j] = self.helper(s, t, i-1, j, memo)
        return memo[i][j]
```

- The `memo[i][j]` represents the number of distinct subsequences till the `ith`, `jth` index of both the strings.
- At each index, we can either move both the pointers or one of the pointer.
- Time - `O(n*m)`
- Space - `O(n*m)`
- Where `n` and `m` are the length of the two strings.

## Solution 2 - Bottom up DP

```py
class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        n = len(s)
        m = len(t)
        memo = [[0 for j in range(m+1)] for i in range(n+1)]
        for i in range(n+1):
            memo[i][0] = 1
        for i in range(1, n+1):
            for j in range(1, m+1):
                if s[i-1] == t[j-1]:
                    memo[i][j] = memo[i-1][j-1]+memo[i-1][j]
                else:
                    memo[i][j] = memo[i-1][j]
        return memo[i][j]
```

- The `memo[i][j]` represents the number of distinct subsequences when the size of the strings are `i` and `j`.
- At each index, we can either move both the pointers or one of the pointer.
- Time - `O(n*m)`
- Space - `O(n*m)`
- Where `n` and `m` are the length of the two strings.

## Solution 3 - Bottom up DP (space optimized)

```py
class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        n = len(s)
        m = len(t)
        prev = [0 for j in range(m+1)]
        prev[0] = 1
        for i in range(1, n+1):
            curr = [0 for j in range(m+1)]
            curr[0] = 1
            for j in range(1, m+1):
                if s[i-1] == t[j-1]:
                    curr[j] = prev[j-1]+prev[j]
                else:
                    curr[j] = prev[j]
            prev = curr
        return prev[j]
```

- Time - `O(n*m)`
- Space - `O(m)`
- Where `n` and `m` are the length of the two strings. 