# [1436. Destination City](https://leetcode.com/problems/destination-city/)

## Solution 1 - DFS

```py
class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        nameToNodeMap = {}
        nodeToNameMap = {}
        n = 0
        for [a, b] in paths:
            if a not in nameToNodeMap:
                nameToNodeMap[a] = n
                nodeToNameMap[n] = a
                n += 1
            if b not in nameToNodeMap:
                nameToNodeMap[b] = n
                nodeToNameMap[n] = b
                n += 1
        graph = [[] for i in range(n)]
        for [a, b] in paths:
            graph[nameToNodeMap[a]].append(nameToNodeMap[b])
        visited = [False for i in range(n)]
        res = self.helper(graph, visited, 0)
        return nodeToNameMap[res]

    def helper(self, graph, visited, curr):
        if len(graph[curr]) == 0:
            return curr
        visited[curr] = True
        for adj in graph[curr]:
            return self.helper(graph, visited, adj)
```

- Time - `O(n+e)`
- Space - `O(n+e)`
- Where `n` is the number of nodes and `e` is the number of edges.

## Solution 2 - Outdegree

```py
class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        hashSet = {a for [a, b] in paths}
        for [a, b] in paths:
            if b not in hashSet:
                return b
```

- Time - `O(e)`
- Space - `O(n)`
- Where `n` is the number of nodes and `e` is the number of edges.