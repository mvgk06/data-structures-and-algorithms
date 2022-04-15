# [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)

## Solution 1 - Two pointers

```py
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        carry = 0
        dummy = ListNode()
        curr = dummy
        while l1 or l2 or carry:
            total = carry
            if l1:
                total += l1.val
                l1 = l1.next
            if l2:
                total += l2.val
                l2 = l2.next
            if total > 9:
                carry = total // 10
                total = total % 10
            else:
                carry = 0
            node = ListNode(total)
            curr.next = node
            curr = node
        return dummy.next
```

-   Time - `O(max(n,m))`
-   Space - `O(max(n,m))`
-   Where `n` and `m` are the number of nodes in list 1 and 2.
