# [1971. Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/)

## Solution 1 - DFS

```c++
class Solution
{
public:
    bool helper(vector<vector<int>> &graph, vector<bool> &visited, int curr, int dest)
    {
        if (curr == dest)
        {
            return true;
        }
        visited[curr] = true;
        for (int adj : graph[curr])
        {
            if (!visited[adj])
            {
                if (helper(graph, visited, adj, dest))
                {
                    return true;
                }
            }
        }
        return false;
    }
    bool validPath(int n, vector<vector<int>> &edges, int source, int destination)
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
        return helper(graph, visited, source, destination);
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
    bool helper(vector<vector<int>> &graph, vector<bool> &visited, int src, int dest)
    {
        queue<int> q;
        visited[src] = true;
        q.push(src);
        while (!q.empty())
        {
            int curr = q.front();
            q.pop();
            if (curr == dest)
            {
                return true;
            }
            for (int adj : graph[curr])
            {
                if (!visited[adj])
                {
                    visited[adj] = true;
                    q.push(adj);
                }
            }
        }
        return false;
    }
    bool validPath(int n, vector<vector<int>> &edges, int source, int destination)
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
        return helper(graph, visited, source, destination);
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
    bool validPath(int n, vector<vector<int>> &edges, int source, int destination)
    {
        DisjointSet ds(n);
        for (int i = 0; i < edges.size(); i++)
        {
            ds.unionSet(edges[i][0], edges[i][1]);
        }
        return ds.findSet(source) == ds.findSet(destination);
    }
};
```

- Time - `O(e)`
- Space - `O(n)`
- Where `n` is the number of nodes and `e` is the number of edges.