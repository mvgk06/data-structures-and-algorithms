# [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)

## Solution 1 - Hashing

```py
class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        visited=set()
        curr=head
        while curr is not None:
            if curr in visited:
                return True
            visited.add(curr)
            curr=curr.next
        return False
```

- Time - `O(n)`
- Space - `O(n)`
- Where `n` is the number of nodes in the list.

## Solution 2 - Two Pointers

```py
class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slow = head
        fast = head
        while fast is not None and fast.next is not None:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
        return False
```

- Time - `O(n)`
- Space - `O(1)`
- Where `n` is the number of nodes in the list.