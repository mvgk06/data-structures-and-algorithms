# [Detect Cycle using DSU](https://practice.geeksforgeeks.org/problems/detect-cycle-using-dsu/1)

## Solution 1 - Disjoint Set

```c++
class Solution
{
public:
    int detectCycle(int n, vector<int> graph[])
    {
        DisjointSet ds(n);
        for (int curr = 0; curr < n; curr++)
        {
            for (int adj : graph[curr])
            {
                if (curr < adj)
                {
                    if (!ds.unionSet(curr, adj))
                    {
                        return 1;
                    }
                }
            }
        }
        return 0;
    }
};
```

- Time - `O(n+e)`
- Space - `O(n+e)`
- Where `n` is the number of nodes and `e` is the number of edges.