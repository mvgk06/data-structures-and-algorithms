# [547. Number of Provinces](https://leetcode.com/problems/number-of-provinces/)

## Solution 1 - DFS

```py
class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        visited = [False for i in range(n)]
        res = 0
        for i in range(n):
            if not visited[i]:
                self.helper(n, isConnected, i, visited)
                res += 1
        return res

    def helper(self, n, graph, i, visited):
        visited[i] = True
        for j in range(n):
            if graph[i][j] == 1 and not visited[j]:
                self.helper(n, graph, j, visited)
```

- Time - `O(n^2)`
- Space - `O(n)`
- Where `n` is the number of nodes.

## Solution 2 - BFS

```py
from collections import deque


class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        visited = [False for i in range(n)]
        res = 0
        for i in range(n):
            if not visited[i]:
                self.helper(n, isConnected, i, visited)
                res += 1
        return res

    def helper(self, n, graph, src, visited):
        q = deque()
        visited[src] = True
        q.append(src)
        while q:
            i = q.popleft()
            for j in range(n):
                if graph[i][j] == 1 and not visited[j]:
                    visited[j] = True
                    q.append(j)
```

- Time - `O(n^2)`
- Space - `O(n)`
- Where `n` is the number of nodes.

## Solution 3 - Disjoint set

```py
class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        ds = DisjointSet(n)
		res=n
        for i in range(n):
            for j in range(n):
                if i != j and isConnected[i][j] == 1:
                    if ds.find(i) != ds.find(j):
                        ds.union(i, j)
						res-=1
        return res
```

- Time - `O(n^2)`
- Space - `O(n)`
- Where `n` is the number of nodes.
