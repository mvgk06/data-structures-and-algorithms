# [547. Number of Provinces](https://leetcode.com/problems/number-of-provinces/)

## Solution 1 - DFS

```c++
class Solution
{
public:
    void helper(vector<vector<int>> &isConnected, vector<bool> &visited, int curr)
    {
        visited[curr] = true;
        for (int adj = 0; adj < isConnected.size(); adj++)
        {
            if (!visited[adj] && isConnected[curr][adj] == 1)
            {
                helper(isConnected, visited, adj);
            }
        }
    }
    int findCircleNum(vector<vector<int>> &isConnected)
    {
        int n = isConnected.size(), res = 0;
        vector<bool> visited(n, false);
        for (int i = 0; i < n; i++)
        {
            if (!visited[i])
            {
                helper(isConnected, visited, i);
                res++;
            }
        }
        return res;
    }
};
```

- Time - `O(n^2)`
- Space - `O(n)`
- Where `n` is the number of nodes.

## Solution 2 - BFS

```c++
class Solution
{
public:
    void helper(vector<vector<int>> &isConnected, vector<bool> &visited, int src)
    {
        queue<int> q;
        visited[src] = true;
        q.push(src);
        while (!q.empty())
        {
            int curr = q.front();
            q.pop();
            for (int adj = 0; adj < isConnected.size(); adj++)
            {
                if (!visited[adj] && isConnected[curr][adj] == 1)
                {
                    visited[adj] = true;
                    q.push(adj);
                }
            }
        }
    }
    int findCircleNum(vector<vector<int>> &isConnected)
    {
        int n = isConnected.size(), res = 0;
        vector<bool> visited(n, false);
        for (int i = 0; i < n; i++)
        {
            if (!visited[i])
            {
                helper(isConnected, visited, i);
                res++;
            }
        }
        return res;
    }
};
```

- Time - `O(n^2)`
- Space - `O(n)`
- Where `n` is the number of nodes.

## Solution 3 - Disjoint Set

```c++
class Solution
{
public:
    int findCircleNum(vector<vector<int>> &isConnected)
    {
        int n = isConnected.size(), res = n;
        DisjointSet ds(n);
        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < n; j++)
            {
                if (i != j && isConnected[i][j] == 1)
                {
                    if (ds.unionSet(i, j))
                    {
                        res--;
                    }
                }
            }
        }
        return res;
    }
};
```

- Time - `O(n^2)`
- Space - `O(n)`
- Where `n` is the number of nodes.