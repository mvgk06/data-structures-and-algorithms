# [Print Adjacency List](https://practice.geeksforgeeks.org/problems/print-adjacency-list-1587115620/1)

## Solution 1 - Brute force

```c++
class Solution
{
public:
    vector<vector<int>> printGraph(int n, vector<int> graph[])
    {
        vector<vector<int>> res;
        for (int i = 0; i < n; i++)
        {
            vector<int> row;
            row.push_back(i);
            for (int j : graph[i])
            {
                row.push_back(j);
            }
            res.push_back(row);
        }
        return res;
    }
};
```

- Time - `O(n+e)`
- Space - `O(n+e)`
- Where `n` is the number of nodes and `e` is the number of edges.