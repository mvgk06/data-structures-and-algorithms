# [261. Graph Valid Tree](https://leetcode.com/problems/graph-valid-tree/)

## Solution 1 - DFS

```c++
class Solution
{
public:
    bool helper(vector<vector<int>> &graph, vector<bool> &visited, int curr, int parent)
    {
        visited[curr] = true;
        for (int adj : graph[curr])
        {
            if (!visited[adj])
            {
                if (helper(graph, visited, adj, curr))
                {
                    return true;
                }
            }
            else if (adj != parent)
            {
                return true;
            }
        }
        return false;
    }
    bool validTree(int n, vector<vector<int>> &edges)
    {
        vector<vector<int>> graph;
        for (int i = 0; i < n; i++)
        {
            vector<int> row;
            graph.push_back(row);
        }
        for (int i = 0; i < edges.size(); i++)
        {
            graph[edges[i][0]].push_back(edges[i][1]);
            graph[edges[i][1]].push_back(edges[i][0]);
        }
        vector<bool> visited(n, false);
        if (helper(graph, visited, 0, -1))
        {
            return false;
        }
        for (int i = 0; i < n; i++)
        {
            if (!visited[i])
            {
                return false;
            }
        }
        return true;
    }
};
```

- Time - `O(n+e)`
- Space - `O(n+e)`
- Where `n` is the number of nodes and `e` is the number of edges.

## Solution 2 - BFS

```c++
class Solution
{
public:
    bool helper(vector<vector<int>> &graph, vector<bool> &visited, int src)
    {
        queue<pair<int, int>> q;
        visited[src] = true;
        q.push({src, -1});
        while (!q.empty())
        {
            auto pair = q.front();
            q.pop();
            int curr = pair.first, parent = pair.second;
            for (int adj : graph[curr])
            {
                if (!visited[adj])
                {
                    visited[adj] = true;
                    q.push({adj, curr});
                }
                else if (adj != parent)
                {
                    return true;
                }
            }
        }
        return false;
    }
    bool validTree(int n, vector<vector<int>> &edges)
    {
        vector<vector<int>> graph;
        for (int i = 0; i < n; i++)
        {
            vector<int> row;
            graph.push_back(row);
        }
        for (int i = 0; i < edges.size(); i++)
        {
            graph[edges[i][0]].push_back(edges[i][1]);
            graph[edges[i][1]].push_back(edges[i][0]);
        }
        vector<bool> visited(n, false);
        if (helper(graph, visited, 0))
        {
            return false;
        }
        for (int i = 0; i < n; i++)
        {
            if (!visited[i])
            {
                return false;
            }
        }
        return true;
    }
};
```

- Time - `O(n+e)`
- Space - `O(n+e)`
- Where `n` is the number of nodes and `e` is the number of edges.

## Solution 3 - Disjoint Set

```c++
class Solution
{
public:
    bool validTree(int n, vector<vector<int>> &edges)
    {
        DisjointSet ds(n);
        int count = n;
        for (int i = 0; i < edges.size(); i++)
        {
            if (ds.unionSet(edges[i][0], edges[i][1]))
            {
                count--;
            }
            else
            {
                return false;
            }
        }
        return (count == 1);
    }
};
```

- Time - `O(e)`
- Space - `O(n)`
- Where `n` is the number of nodes and `e` is the number of edges.