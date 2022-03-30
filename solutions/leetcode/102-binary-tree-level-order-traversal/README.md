# [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)

## Solution 1 - BFS

```py
from collections import deque


class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if root is None:
            return []
        q = deque()
        q.append(root)
        res = []
        while q:
            level = []
            n = len(q)
            for i in range(n):
                curr = q.popleft()
                level.append(curr.val)
                if curr.left is not None:
                    q.append(curr.left)
                if curr.right is not None:
                    q.append(curr.right)
            res.append(level)
        return res
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - DFS

```py
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        res = []
        self.helper(root, 0, res)
        return res

    def helper(self, root, level, res):
        if root is None:
            return
        if len(res) == level:
            res.append([])
        res[level].append(root.val)
        self.helper(root.left, level+1, res)
        self.helper(root.right, level+1, res)
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
