# [429. N-ary Tree Level Order Traversal](https://leetcode.com/problems/n-ary-tree-level-order-traversal/)

## Solution 1 - BFS

```py
from collections import deque


class Solution:
    def levelOrder(self, root: 'Node') -> List[List[int]]:
        if root is None:
            return []
        res = []
        self.helper(root, res)
        return res

    def helper(self, root, res):
        q = deque()
        q.append(root)
        while q:
            size = len(q)
            level = []
            for i in range(size):
                curr = q.popleft()
                level.append(curr.val)
                for child in curr.children:
                    q.append(child)
            res.append(level)
```

- Time - `O(n)`
- Space - `O(n)`
- Where `n` is the number of nodes.

## Solution 2 - DFS

```py
class Solution:
    def levelOrder(self, root: 'Node') -> List[List[int]]:
        if root is None:
            return []
        res = []
        self.helper(root, 0, res)
        return res

    def helper(self, root, level, res):
        if root is None:
            return []
        if len(res) == level:
            res.append([root.val])
        else:
            res[level].append(root.val)
        for child in root.children:
            self.helper(child, level+1, res)
```

- Time - `O(n)`
- Space - `O(n)`
- Where `n` is the number of nodes.