# [876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)

## Solution 1 - Brute Force

```c++
class Solution
{
public:
    ListNode *middleNode(ListNode *head)
    {
        int n = 0;
        ListNode *curr = head;
        while (curr)
        {
            n++;
            curr = curr->next;
        }
        int i = 0, mid = n / 2;
        curr = head;
        while (i != mid)
        {
            curr = curr->next;
            i++;
        }
        return curr;
    }
};
```

- Time - `O(n)`
- Space - `O(1)`
- Where `n` is the number of nodes.

## Solution 2 - Two Pointers

```c++
class Solution
{
public:
    ListNode *middleNode(ListNode *head)
    {
        ListNode *slow = head, *fast = head;
        while (fast && fast->next)
        {
            slow = slow->next;
            fast = fast->next->next;
        }
        return slow;
    }
};
```

- Time - `O(n)`
- Space - `O(1)`
- Where `n` is the number of nodes.