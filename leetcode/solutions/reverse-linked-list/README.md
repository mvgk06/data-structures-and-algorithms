# [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

## Solution 1 - Recursive

```c++
class Solution
{
public:
    ListNode *helper(ListNode *prev, ListNode *curr)
    {
        if (!curr)
        {
            return prev;
        }
        ListNode *nextCopy = curr->next;
        curr->next = prev;
        return helper(curr, nextCopy);
    }
    ListNode *reverseList(ListNode *head)
    {
        return helper(nullptr, head);
    }
};
```

- Time - `O(n)`
- Space - `O(n)`
- Where `n` is the number of nodes.

## Solution 2 - Iterative

```c++
class Solution
{
public:
    ListNode *reverseList(ListNode *head)
    {
        ListNode *prev = nullptr, *curr = head;
        while (curr)
        {
            ListNode *nextCopy = curr->next;
            curr->next = prev;
            prev = curr;
            curr = nextCopy;
        }
        return prev;
    }
};
```

- Time - `O(n)`
- Space - `O(1)`
- Where `n` is the number of nodes.