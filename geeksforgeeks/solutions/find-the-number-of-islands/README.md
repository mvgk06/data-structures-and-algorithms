# [Find the Number of Islands](https://practice.geeksforgeeks.org/problems/find-the-number-of-islands/1)

## Solution 1 - DFS

```c++
class Solution
{
public:
    void helper(vector<vector<char>> &grid, vector<vector<bool>> &visited, vector<pair<int, int>> &paths, int i, int j)
    {
        if (i < 0 || i >= grid.size() || j < 0 || j >= grid[i].size() || visited[i][j] || grid[i][j] == '0')
        {
            return;
        }
        visited[i][j] = true;
        for (int k = 0; k < paths.size(); k++)
        {
            int row = i + paths[k].first, col = j + paths[k].second;
            helper(grid, visited, paths, row, col);
        }
    }
    int numIslands(vector<vector<char>> &grid)
    {
        int res = 0;
        int n = grid.size(), m = grid[0].size();
        vector<vector<bool>> visited(n, vector<bool>(m, false));
        vector<pair<int, int>> paths = {{-1, 0}, {-1, 1}, {0, 1}, {1, 1}, {1, 0}, {1, -1}, {0, -1}, {-1, -1}};
        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < m; j++)
            {
                if (!visited[i][j] && grid[i][j] == '1')
                {
                    helper(grid, visited, paths, i, j);
                    res++;
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

## Solution 2 - BFS

```c++
class Solution
{
public:
    bool isValid(vector<vector<char>> &grid, vector<vector<bool>> &visited, int i, int j)
    {
        return (i >= 0 && i < grid.size() && j >= 0 && j < grid[i].size() && !visited[i][j] && grid[i][j] == '1');
    }
    void helper(vector<vector<char>> &grid, vector<vector<bool>> &visited, vector<pair<int, int>> &paths, int i, int j)
    {
        queue<pair<int, int>> q;
        visited[i][j] = true;
        q.push({i, j});
        while (!q.empty())
        {
            auto curr = q.front();
            q.pop();
            int row = curr.first, col = curr.second;
            for (int k = 0; k < paths.size(); k++)
            {
                int nextRow = row + paths[k].first, nextCol = col + paths[k].second;
                if (isValid(grid, visited, nextRow, nextCol))
                {
                    visited[nextRow][nextCol] = true;
                    q.push({nextRow, nextCol});
                }
            }
        }
    }
    int numIslands(vector<vector<char>> &grid)
    {
        int res = 0;
        int n = grid.size(), m = grid[0].size();
        vector<vector<bool>> visited(n, vector<bool>(m, false));
        vector<pair<int, int>> paths = {{-1, 0}, {-1, 1}, {0, 1}, {1, 1}, {1, 0}, {1, -1}, {0, -1}, {-1, -1}};
        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < m; j++)
            {
                if (!visited[i][j] && grid[i][j] == '1')
                {
                    helper(grid, visited, paths, i, j);
                    res++;
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