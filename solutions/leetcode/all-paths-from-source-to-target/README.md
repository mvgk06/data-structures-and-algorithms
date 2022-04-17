# [797. All Paths From Source to Target](https://leetcode.com/problems/all-paths-from-source-to-target/)

## Solution 1 - DFS

```py
class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        n = len(graph)
        res = []
        self.helper(graph, n, 0, [], res)
        return res

    def helper(self, graph, n, curr, path, res):
        if curr == n-1:
            path.append(curr)
            res.append(list(path))
            path.pop()
            return
        path.append(curr)
        for adj in graph[curr]:
            self.helper(graph, n, adj, path, res)
        path.pop()
```

- Time - `O(2^n)`
- Space - `O(2^n)`
- Where `n` is the number of nodes.
  
## Solution 2 - BFS

```py
from collections import deque


class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        n = len(graph)
        res = []
        self.helper(graph, n, 0, res)
        return res

    def helper(self, graph, n, src, res):
        q = deque()
        q.append([src, []])
        while q:
            [curr, path] = q.popleft()
            path.append(curr)
            if curr == n-1:
                res.append(list(path))
            else:
                for adj in graph[curr]:
                    q.append([adj, list(path)])
```

- Time - `O(2^n)`
- Space - `O(2^n)`
- Where `n` is the number of nodes.