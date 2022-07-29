# [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

## Solution 1 - Recursive

```py
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if list1 is None:
            return list2
        if list2 is None:
            return list1
        if list1.val <= list2.val:
            list1.next = self.mergeTwoLists(list1.next, list2)
            return list1
        list2.next = self.mergeTwoLists(list1, list2.next)
        return list2
```

- Time - `O(n+m)`
- Space - `O(n+m)`
- Where `n` and `m` are the number of nodes in `list1` and `list2`.

## Solution 2 - Iterative

```py
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy_head = ListNode()
        curr = dummy_head
        while list1 is not None and list2 is not None:
            if list1.val <= list2.val:
                curr.next = list1
                list1 = list1.next
            else:
                curr.next = list2
                list2 = list2.next
            curr = curr.next
        if list1 is None:
            curr.next = list2
        if list2 is None:
            curr.next = list1
        return dummy_head.next
```

- Time - `O(n+m)`
- Space - `O(1)`
- Where `n` and `m` are the number of nodes in `list1` and `list2`.