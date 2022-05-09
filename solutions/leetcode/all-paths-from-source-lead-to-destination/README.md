# [1059. All Paths from Source Lead to Destination](https://leetcode.com/problems/all-paths-from-source-lead-to-destination/)

## Solution 1 - DFS

```py
class Solution:
    def leadsToDestination(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        graph = [[] for i in range(n)]
        for [a, b] in edges:
            graph[a].append(b)
        visited = [False for i in range(n)]
        active = [False for i in range(n)]
        return self.helper(graph, source, destination, visited, active)

    def helper(self, graph, curr, dest, visited, active):
        if curr == dest:
            return len(graph[curr]) == 0
        if len(graph[curr]) == 0:
            return False
        visited[curr] = True
        active[curr] = True
        for adj in graph[curr]:
            if not visited[adj]:
                if not self.helper(graph, adj, dest, visited, active):
                    return False
            elif active[adj]:
                return False
        active[curr] = False
        return True
```

- Time - `O(n+e)`
- Space - `O(n+e)`
- Where `n` is the number of nodes and `e` is the number of edges.