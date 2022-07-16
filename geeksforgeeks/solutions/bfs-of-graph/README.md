# [BFS of Graph](https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1)

## Solution 1 - BFS

```c++
class Solution
{
public:
    vector<int> bfsOfGraph(int n, vector<int> graph[])
    {
        vector<int> res;
        vector<bool> visited(n, false);
        queue<int> q;
        visited[0] = true;
        q.push(0);
        while (!q.empty())
        {
            int curr = q.front();
            q.pop();
            res.push_back(curr);
            for (int adj : graph[curr])
            {
                if (!visited[adj])
                {
                    visited[adj] = true;
                    q.push(adj);
                }
            }
        }
        return res;
    }
};
```

- Time - `O(n+e)`
- Space - `O(n+e)`
- Where `n` is the number of nodes and `e` is the number of edges.