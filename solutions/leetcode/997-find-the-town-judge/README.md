# [997. Find the Town Judge](https://leetcode.com/problems/find-the-town-judge/)

## Solution 1 - Indegree and outdegree

```py
class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        degree = [[0, 0] for i in range(n+1)]
        for [a, b] in trust:
            degree[b][0] += 1
            degree[a][1] += 1
        res = -1
        for i in range(1, n+1):
            if degree[i][0] == n-1 and degree[i][1] == 0:
                res = i
        return res
```

- Time - `O(e)`
- Space - `O(n)`
- Where `n` is the number of nodes and `e` is the number of edges.