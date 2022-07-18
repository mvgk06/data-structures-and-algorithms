# [323. Number of Connected Components in an Undirected Graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/)

## Solution 1 - DFS

```c++
class Solution
{
public:
    void helper(vector<vector<int>> &graph, vector<bool> &visited, int curr)
    {
        visited[curr] = true;
        for (int adj : graph[curr])
        {
            if (!visited[adj])
            {
                helper(graph, visited, adj);
            }
        }
    }
    int countComponents(int n, vector<vector<int>> &edges)
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
        int res = 0;
        vector<bool> visited(n, false);
        for (int i = 0; i < n; i++)
        {
            if (!visited[i])
            {
                helper(graph, visited, i);
                res++;
            }
        }
        return res;
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
    void helper(vector<vector<int>> &graph, vector<bool> &visited, int src)
    {
        queue<int> q;
        visited[src] = true;
        q.push(src);
        while (!q.empty())
        {
            int curr = q.front();
            q.pop();
            for (int adj : graph[curr])
            {
                if (!visited[adj])
                {
                    visited[adj] = true;
                    q.push(adj);
                }
            }
        }
    }
    int countComponents(int n, vector<vector<int>> &edges)
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
        int res = 0;
        vector<bool> visited(n, false);
        for (int i = 0; i < n; i++)
        {
            if (!visited[i])
            {
                helper(graph, visited, i);
                res++;
            }
        }
        return res;
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
    int countComponents(int n, vector<vector<int>> &edges)
    {
        DisjointSet ds(n);
        int res = n;
        for (int i = 0; i < edges.size(); i++)
        {
            if (ds.unionSet(edges[i][0], edges[i][1]))
            {
                res--;
            }
        }
        return res;
    }
};
```

- Time - `O(e)`
- Space - `O(n)`
- Where `n` is the number of nodes and `e` is the number of edges.