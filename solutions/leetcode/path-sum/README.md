# [112. Path Sum](https://leetcode.com/problems/path-sum/)

## Solution 1 - DFS

```py
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        return self.helper(root, 0, targetSum)

    def helper(self, root, currSum, target):
        if root is None:
            return False
        if root.left is None and root.right is None:
            return currSum + root.val == target
        return self.helper(root.left, currSum + root.val, target) or self.helper(root.right, currSum + root.val, target)
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - BFS

```py
from collections import deque


class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if root is None:
            return False
        q = deque()
        q.append([root, 0])
        while q:
            [curr, currSum] = q.popleft()
            if curr.left is None and curr.right is None:
                if currSum + curr.val == targetSum:
                    return True
            if curr.left is not None:
                q.append([curr.left, currSum + curr.val])
            if curr.right is not None:
                q.append([curr.right, currSum + curr.val])
        return False
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
