# [Union Find](https://practice.geeksforgeeks.org/problems/union-find/1)

## Solution 1 - Disjoint Set

```c++
class Solution
{
public:
    int find(int a, int parent[])
    {
        if (parent[a] == a)
        {
            return a;
        }
        int aRep = find(parent[a], parent);
        parent[a] = aRep;
        return aRep;
    }
    void union_(int a, int b, int parent[], int rank[])
    {
        int aRep = find(a, parent), bRep = find(b, parent);
        if (aRep != bRep)
        {
            if (rank[aRep] < rank[bRep])
            {
                parent[aRep] = bRep;
            }
            else if (rank[bRep] < rank[aRep])
            {
                parent[bRep] = aRep;
            }
            else
            {
                parent[bRep] = aRep;
                rank[aRep]++;
            }
        }
    }
    bool isConnected(int x, int y, int parent[], int rank[])
    {
        return (find(x, parent) == find(y, parent));
    }
};
```

- Time
  - Union - `O(1)`
  - Find - `O(1)`
  - Is Connected - `O(1)`
- Space - `O(n)`
- Where `n` is the number of nodes.