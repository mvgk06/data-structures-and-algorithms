# [110. Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)

## Solution 1 - Brute force

```py
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        if root is None:
            return True
        left = self.helper(root.left)
        right = self.helper(root.right)
        return abs(left - right) <= 1 and self.isBalanced(root.left) and self.isBalanced(root.right)

    def helper(self, root):
        if root is None:
            return 0
        left = self.helper(root.left)
        right = self.helper(root.right)
        return 1 + max(left, right)
```

-   Time - `O(n^2)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - Optimized

```py
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        height = self.helper(root)
        if height == -1:
            return False
        return True

    def helper(self, root):
        if root is None:
            return 0
        left = self.helper(root.left)
        if left == -1:
            return -1
        right = self.helper(root.right)
        if right == -1:
            return -1
        if abs(left - right) <= 1:
            return 1 + max(left, right)
        return -1
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
