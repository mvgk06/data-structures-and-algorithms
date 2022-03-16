# [516. Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)

## Solution 1 - Top down DP

```py
class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        s1 = s
        s2 = s[::-1]
        n = len(s1)
        m = len(s2)
        memo = [[-1 for j in range(m)] for i in range(n)]
        return self.helper(s1, s2, n-1, m-1, memo)

    def helper(self, s1, s2, i, j, memo):
        if i < 0 or j < 0:
            return 0
        if memo[i][j] != -1:
            return memo[i][j]
        if s1[i] == s2[j]:
            memo[i][j] = 1+self.helper(s1, s2, i-1, j-1, memo)
        else:
            memo[i][j] = max(self.helper(s1, s2, i-1, j, memo),
                             self.helper(s1, s2, i, j-1, memo))
        return memo[i][j]
```

- The `memo[i][j]` represents the longest common subsequence till the `ith`, `jth` index of both the strings.
- At each index, we can either move both the pointers or one of the pointer.
- Time - `O(n*m)`
- Space - `O(n*m)`
- Where `n` and `m` are the length of the two strings.

## Solution 2 - Bottom up DP

```py
class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        s1 = s
        s2 = s[::-1]
        n = len(s1)
        m = len(s2)
        memo = [[0 for j in range(m+1)] for i in range(n+1)]
        for i in range(1, n+1):
            for j in range(1, m+1):
                if s1[i-1] == s2[j-1]:
                    memo[i][j] = 1+memo[i-1][j-1]
                else:
                    memo[i][j] = max(memo[i-1][j], memo[i][j-1])
        return memo[i][j]
```

- The `memo[i][j]` represents the longest common subsequence when the size of the strings are `i` and `j`.
- At each index, we can either move both the pointers or one of the pointer.
- Time - `O(n*m)`
- Space - `O(n*m)`
- Where `n` and `m` are the length of the two strings.
  
## Solution 3 - Bottom up DP (space optimized)

```py
class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        s1 = s
        s2 = s[::-1]
        n = len(s1)
        m = len(s2)
        prev = [0 for j in range(m+1)]
        for i in range(1, n+1):
            curr = [0 for j in range(m+1)]
            for j in range(1, m+1):
                if s1[i-1] == s2[j-1]:
                    curr[j] = 1+prev[j-1]
                else:
                    curr[j] = max(prev[j], curr[j-1])
            prev = curr
        return prev[j]
```

- Time - `O(n*m)`
- Space - `O(m)`
- Where `n` and `m` are the length of the two strings.