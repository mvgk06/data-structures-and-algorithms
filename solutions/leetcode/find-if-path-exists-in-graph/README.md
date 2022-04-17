# [1971. Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/)

## Solution 1 - DFS

```py
class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        graph = [[] for i in range(n)]
        for [a, b] in edges:
            graph[a].append(b)
            graph[b].append(a)
        visited = [False for i in range(n)]
        return self.helper(graph, visited, source, destination)

    def helper(self, graph, visited, curr, dest):
        if curr == dest:
            return True
        visited[curr] = True
        for adj in graph[curr]:
            if not visited[adj]:
                if self.helper(graph, visited, adj, dest):
                    return True
        return False
```

-   Time - `O(n+e)`
-   Space - `O(n+e)`
-   Where `n` is the number of nodes, `e` is the number of edges.

## Solution 2 - BFS

```py
from collections import deque


class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        graph = [[] for i in range(n)]
        for [a, b] in edges:
            graph[a].append(b)
            graph[b].append(a)
        visited = [False for i in range(n)]
        return self.helper(graph, visited, source, destination)

    def helper(self, graph, visited, src, dest):
        q = deque()
        visited[src] = True
        q.appendleft(src)
        while q:
            curr = q.popleft()
            if curr == dest:
                return True
            for adj in graph[curr]:
                if not visited[adj]:
                    visited[adj] = True
                    q.appendleft(adj)
        return False
```

-   Time - `O(n+e)`
-   Space - `O(n+e)`
-   Where `n` is the number of nodes, `e` is the number of edges.

## Solution 3 - Disjoint set

```py
class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        ds = DisjointSet(n)
        for [a, b] in edges:
            if ds.find(a) != ds.find(b):
                ds.union(a, b)
        return ds.find(source) == ds.find(destination)
```

-   Time - `O(e)`
-   Space - `O(n)`
-   Where `n` is the number of nodes, `e` is the number of edges.
