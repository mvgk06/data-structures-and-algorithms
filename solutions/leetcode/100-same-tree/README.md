# [100. Same Tree](https://leetcode.com/problems/same-tree/)

## Solution 1 - DFS

```py
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if p is None and q is None:
            return True
        if p is None or q is None or p.val != q.val:
            return False
        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - BFS

```py
from collections import deque


class Solution:
    def isSameTree(self, a: Optional[TreeNode], b: Optional[TreeNode]) -> bool:
        q = deque()
        q.append([a, b])
        while q:
            [a, b] = q.popleft()
            if a is None and b is None:
                continue
            if a is None or b is None or a.val != b.val:
                return False
            q.append([a.left, b.left])
            q.append([a.right, b.right])
        return True
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
