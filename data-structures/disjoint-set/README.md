# Disjoint Set

```py
class DisjointSet:
    def __init__(self, n):
        self._parent = [i for i in range(n)]
        self._rank = [0 for i in range(n)]

    def union(self, a, b):
        aRep = self.find(a)
        bRep = self.find(b)
        if self._rank[aRep] < self._rank[bRep]:
            self._parent[aRep] = bRep
        elif self._rank[bRep] < self._rank[aRep]:
            self._parent[bRep] = aRep
        else:
            self._parent[bRep] = aRep
            self._rank[aRep] += 1

    def find(self, a):
        if self._parent[a] == a:
            return a
        aRep = self.find(self._parent[a])
        self._parent[a] = aRep
        return aRep
```

-   Time
    -   Union - `O(1)`
    -   Find - `O(1)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
