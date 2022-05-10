# [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)

## Solution 1 - DFS

```py
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if root is None:
            return None
        temp = root.left
        root.left = root.right
        root.right = temp
        self.invertTree(root.left)
        self.invertTree(root.right)
        return root
```

- Time - `O(n)`
- Space - `O(n)`
- Where `n` is the number of nodes.

## Solution 2 - BFS

```py
from collections import deque


class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if root is None:
            return None
        q = deque()
        q.append(root)
        while q:
            curr = q.popleft()
            temp = curr.left
            curr.left = curr.right
            curr.right = temp
            if curr.left is not None:
                q.append(curr.left)
            if curr.right is not None:
                q.append(curr.right)
        return root
```

- Time - `O(n)`
- Space - `O(n)`
- Where `n` is the number of nodes.