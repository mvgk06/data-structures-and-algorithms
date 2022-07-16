# [DFS of Graph](https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1)

## Solution 1 - DFS

```c++
class Solution
{
public:
    void helper(vector<int> graph[], vector<bool> &visited, int curr, vector<int> &res)
    {
        visited[curr] = true;
        res.push_back(curr);
        for (int adj : graph[curr])
        {
            if (!visited[adj])
            {
                helper(graph, visited, adj, res);
            }
        }
    }
    vector<int> dfsOfGraph(int n, vector<int> graph[])
    {
        vector<int> res;
        vector<bool> visited(n, false);
        helper(graph, visited, 0, res);
        return res;
    }
};
```

- Time - `O(n+e)`
- Space - `O(n+e)`
- Where `n` is the number of nodes and `e` is the number of edges.