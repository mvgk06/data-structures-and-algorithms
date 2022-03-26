# [44. Wildcard Matching](https://leetcode.com/problems/wildcard-matching/)

## Solution 1 - Top down DP

```py
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        n = len(s)
        m = len(p)
        memo = [[-1 for j in range(m)] for i in range(n)]
        return self.helper(s, p, n-1, m-1, memo)

    def helper(self, s, p, i, j, memo):
        if i < 0:
            if j < 0 or self.allStars(p, j):
                return True
            return False
        if j < 0:
            return False
        if memo[i][j] != -1:
            return memo[i][j]
        if s[i] == p[j] or p[j] == "?":
            memo[i][j] = self.helper(s, p, i-1, j-1, memo)
        elif p[j] == "*":
            zeroMatch = self.helper(s, p, i, j-1, memo)
            moreMatch = self.helper(s, p, i-1, j, memo)
            memo[i][j] = zeroMatch or moreMatch
        else:
            memo[i][j] = False
        return memo[i][j]

    def allStars(self, p, j):
        for i in range(j+1):
            if p[i] != "*":
                return False
        return True
```

- The `memo[i][j]` represents whether we got a match till the `ith`, `jth` index of both the strings.
- At each index, we can either move both the pointers or one of the pointer.
- Time - `O(n*m)`
- Space - `O(n*m)`
- Where `n` and `m` are the length of the two strings.

## Solution 2 - Bottom up DP

```py
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        n = len(s)
        m = len(p)
        memo = [[False for j in range(m+1)] for i in range(n+1)]
        for j in range(1, m+1):
            if self.allStars(p, j):
                memo[0][j] = True
        memo[0][0] = True
        for i in range(1, n+1):
            for j in range(1, m+1):
                if s[i-1] == p[j-1] or p[j-1] == "?":
                    memo[i][j] = memo[i-1][j-1]
                elif p[j-1] == "*":
                    zeroMatch = memo[i][j-1]
                    moreMatch = memo[i-1][j]
                    memo[i][j] = zeroMatch or moreMatch
        return memo[n][m]

    def allStars(self, p, j):
        for i in range(j):
            if p[i] != "*":
                return False
        return True
```

- The `memo[i][j]` represents whether we got a match when the size of the strings are `i` and `j`.
- At each index, we can either move both the pointers or one of the pointer.
- Time - `O(n*m)`
- Space - `O(n*m)`
- Where `n` and `m` are the length of the two strings.

## Solution 3 - Bottom up DP (space optimized)

```py
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        n = len(s)
        m = len(p)
        prev = [False for j in range(m+1)]
        for j in range(1, m+1):
            if self.allStars(p, j):
                prev[j] = True
        prev[0] = True
        for i in range(1, n+1):
            curr = [False for j in range(m+1)]
            for j in range(1, m+1):
                if s[i-1] == p[j-1] or p[j-1] == "?":
                    curr[j] = prev[j-1]
                elif p[j-1] == "*":
                    zeroMatch = curr[j-1]
                    moreMatch = prev[j]
                    curr[j] = zeroMatch or moreMatch
            prev = curr
        return prev[m]

    def allStars(self, p, j):
        for i in range(j):
            if p[i] != "*":
                return False
        return True
```

- Time - `O(n*m)`
- Space - `O(m)`
- Where `n` and `m` are the length of the two strings.