# [261. Graph Valid Tree](https://leetcode.com/problems/graph-valid-tree/)

## Solution 1 - DFS

```py
class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        graph = [[] for i in range(n)]
        for [a, b] in edges:
            graph[a].append(b)
            graph[b].append(a)
        visited = [False for i in range(n)]
        if self.isCyclic(graph, 0, -1, visited):
            return False
        for i in range(n):
            if not visited[i]:
                return False
        return True

    def isCyclic(self, graph, curr, parent, visited):
        visited[curr] = True
        for adj in graph[curr]:
            if not visited[adj]:
                if self.isCyclic(graph, adj, curr, visited):
                    return True
            elif adj != parent:
                return True
        return False
```

- Time - `O(n+e)`
- Space - `O(n+e)`
- Where `n` is the number of nodes and `e` is the number of edges.

## Solution 2 - BFS

```py
from collections import deque


class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        graph = [[] for i in range(n)]
        for [a, b] in edges:
            graph[a].append(b)
            graph[b].append(a)
        visited = [False for i in range(n)]
        if self.isCyclic(graph, 0, visited):
            return False
        for i in range(n):
            if not visited[i]:
                return False
        return True

    def isCyclic(self, graph, src, visited):
        q = deque()
        visited[src] = True
        q.append([src, -1])
        while q:
            [curr, parent] = q.popleft()
            for adj in graph[curr]:
                if not visited[adj]:
                    visited[adj] = True
                    q.append([adj, curr])
                elif adj != parent:
                    return True
        return False
```

- Time - `O(n+e)`
- Space - `O(n+e)`
- Where `n` is the number of nodes and `e` is the number of edges.

## Solution 3 - Disjoint set

```py
class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        ds = DisjointSet(n)
        count = n
        for [a, b] in edges:
            aRep = ds.find(a)
            bRep = ds.find(b)
            if aRep != bRep:
                ds.union(aRep, bRep)
                count -= 1
            else:
                return False
        if count != 1:
            return False
        return True
```

- Time - `O(e)`
- Space - `O(n)`
- Where `n` is the number of nodes and `e` is the number of edges.