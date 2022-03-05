# [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/)

## Solution 1 - DFS

```py
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        return self.helper(root.left, root.right)

    def helper(self, l, r):
        if not l and not r:
            return True

        if not l or not r or l.val != r.val:
            return False

        return self.helper(l.left, r.right) and self.helper(l.right, r.left)
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - BFS

```py
from collections import deque


class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        q = deque()
        q.appendleft([root.left, root.right])
        while q:
            [l, r] = q.popleft()
            if not l and not r:
                continue

            if not l or not r or l.val != r.val:
                return False

            q.appendleft([l.left, r.right])
            q.appendleft([l.right, r.left])
        return True
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
