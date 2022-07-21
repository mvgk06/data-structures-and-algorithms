# [200. Number of Islands](https://leetcode.com/problems/number-of-islands/)

## Solution 1 - DFS

```c++
class Solution {
public:
    void helper(vector<vector<char>> &grid,vector<vector<bool>> &visited, vector<vector<int>> &paths, int i, int j){
        if(i<0 || i>=grid.size() || j<0 || j>=grid[i].size() || visited[i][j] || grid[i][j]=='0'){
            return;
        }
        visited[i][j]=true;
        for(int k=0;k<paths.size();k++){
            int row=i+paths[k][0], col=j+paths[k][1];
            helper(grid,visited,paths,row,col);
        }
    }
    int numIslands(vector<vector<char>>& grid) {
        int m=grid.size(), n=grid[0].size();
        vector<vector<bool>> visited(m, vector<bool>(n,false));
        vector<vector<int>> paths={{-1,0},{0,1},{1,0},{0,-1}};
        int res=0;
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                if(!visited[i][j] && grid[i][j]=='1'){
                    helper(grid,visited,paths,i,j);
                    res++;
                }
            }
        }
        return res;
    }
};
```

- Time - `O(m*n)`
- Space - `O(m*n)`
- Where `m` is the number of rows and `n` is the number of columns.

## Solution 2 - BFS

```c++
class Solution
{
public:
    bool isValid(vector<vector<char>> &grid, vector<vector<bool>> &visited, int i, int j)
    {
        return i >= 0 && i < grid.size() && j >= 0 && j < grid[i].size() && !visited[i][j] && grid[i][j] == '1';
    }
    void helper(vector<vector<char>> &grid, vector<vector<bool>> &visited, vector<vector<int>> &paths, int i, int j)
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
                int nextRow = row + paths[k][0], nextCol = col + paths[k][1];
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
        int m = grid.size(), n = grid[0].size();
        vector<vector<bool>> visited(m, vector<bool>(n, false));
        vector<vector<int>> paths = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};
        int res = 0;
        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
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

- Time - `O(m*n)`
- Space - `O(m*n)`
- Where `m` is the number of rows and `n` is the number of columns.