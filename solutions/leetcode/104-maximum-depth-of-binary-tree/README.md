# [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

## Solution 1 - Bottom up DFS

```py
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        left = self.maxDepth(root.left)
        right = self.maxDepth(root.right)
        return 1 + max(left, right)
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - BFS

```py
from collections import deque


class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        queue = deque()
        queue.append(root)
        res = 0
        while queue:
            n = len(queue)
            for i in range(0, n):
                curr = queue.popleft()
                if curr.left is not None:
                    queue.append(curr.left)
                if curr.right is not None:
                    queue.append(curr.right)
            res += 1
        return res
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
