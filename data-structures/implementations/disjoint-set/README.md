# Disjoint Set

```c++
class DisjointSet
{
    vector<int> parent;
    vector<int> rank;

public:
    DisjointSet(int n)
    {
        for (int i = 0; i < n; i++)
        {
            parent.push_back(i);
            rank.push_back(0);
        }
    }
    int findSet(int a)
    {
        if (parent[a] == a)
        {
            return a;
        }
        int aRep = findSet(parent[a]);
        parent[a] = aRep;
        return aRep;
    }
    bool unionSet(int a, int b)
    {
        int aRep = findSet(a), bRep = findSet(b);
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
            return true;
        }
        return false;
    }
};
```

- Time
  - Union - `O(1)`
  - Find - `O(1)`
- Space - `O(n)`
- Where `n` is the number of nodes.