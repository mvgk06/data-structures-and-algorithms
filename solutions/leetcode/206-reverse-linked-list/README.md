# [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

## Solution 1 - Recursive

```py
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        return self.helper(head, None)

    def helper(self, curr, prev):
        if curr is None:
            return prev
        next = curr.next
        curr.next = prev
        return self.helper(next, curr)
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - Iterative

```py
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        curr = head
        while curr is not None:
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        return prev
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the number of nodes.
