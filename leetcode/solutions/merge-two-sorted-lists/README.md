# [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

## Solution 1 - Recursive

```c++
class Solution
{
public:
    ListNode *mergeTwoLists(ListNode *list1, ListNode *list2)
    {
        if (!list1)
        {
            return list2;
        }
        if (!list2)
        {
            return list1;
        }
        if (list1->val <= list2->val)
        {
            list1->next = mergeTwoLists(list1->next, list2);
            return list1;
        }
        list2->next = mergeTwoLists(list1, list2->next);
        return list2;
    }
};
```

- Time - `O(n+m)`
- Space - `O(n+m)`
- Where `n` and `m` are the number of nodes in `list1` and `list2`.

## Solution 2 - Iterative

```c++
class Solution
{
public:
    ListNode *mergeTwoLists(ListNode *list1, ListNode *list2)
    {
        ListNode *dummy = new ListNode(0), *curr = dummy;
        while (list1 && list2)
        {
            if (list1->val <= list2->val)
            {
                curr->next = list1;
                list1 = list1->next;
            }
            else
            {
                curr->next = list2;
                list2 = list2->next;
            }
            curr = curr->next;
        }
        if (list1)
        {
            curr->next = list1;
        }
        else if (list2)
        {
            curr->next = list2;
        }
        return dummy->next;
    }
};
```

- Time - `O(n+m)`
- Space - `O(1)`
- Where `n` and `m` are the number of nodes in `list1` and `list2`.