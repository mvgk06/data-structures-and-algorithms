# [1101. The Earliest Moment When Everyone Become Friends](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/)

## Solution 1 - Disjoint set

```py
class Solution:
    def earliestAcq(self, logs: List[List[int]], n: int) -> int:
        logs.sort(key=lambda x: x[0])
        ds = DisjointSet(n)
        count = n
        for [t, a, b] in logs:
            aRep = ds.find(a)
            bRep = ds.find(b)
            if aRep != bRep:
                ds.union(a, b)
                count -= 1
                if count == 1:
                    return t
        return -1
```

- Time - `O(elog(e))`
- Space - `O(n)`
- Where `n` is the number of nodes and `e` is the number of edges.