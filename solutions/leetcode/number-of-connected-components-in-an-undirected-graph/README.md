# [323. Number of Connected Components in an Undirected Graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/)

## Solution 1 - DFS

```py
class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        graph = [[] for i in range(n)]
        for [a, b] in edges:
            graph[a].append(b)
            graph[b].append(a)
        visited = [False for i in range(n)]
        res = 0
        for i in range(n):
            if not visited[i]:
                self.helper(graph, i, visited)
                res += 1
        return res

    def helper(self, graph, curr, visited):
        visited[curr] = True
        for adj in graph[curr]:
            if not visited[adj]:
                self.helper(graph, adj, visited)
```

- Time - `O(n+e)`
- Space - `O(n+e)`
- Where `n` is the number of nodes and `e` is the number of edges.

## Solution 2 - BFS

```py
from collections import deque


class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        graph = [[] for i in range(n)]
        for [a, b] in edges:
            graph[a].append(b)
            graph[b].append(a)
        visited = [False for i in range(n)]
        res = 0
        for i in range(n):
            if not visited[i]:
                self.helper(graph, i, visited)
                res += 1
        return res

    def helper(self, graph, src, visited):
        q = deque()
        visited[src] = True
        q.append(src)
        while q:
            curr = q.popleft()
            for adj in graph[curr]:
                if not visited[adj]:
                    visited[adj] = True
                    q.append(adj)
```

- Time - `O(n+e)`
- Space - `O(n+e)`
- Where `n` is the number of nodes and `e` is the number of edges.

## Solution 3 - Disjoint set

```py
class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        ds = DisjointSet(n)
        res = n
        for [a, b] in edges:
            if ds.find(a) != ds.find(b):
                ds.union(a, b)
                res -= 1
        return res
```

- Time - `O(e)`
- Space - `O(n)`
- Where `n` is the number of nodes and `e` is the number of edges.