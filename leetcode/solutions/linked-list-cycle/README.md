# [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)

## Solution 1 - Hashing

```c++
class Solution
{
public:
    bool hasCycle(ListNode *head)
    {
        unordered_set<ListNode *> visited;
        ListNode *curr = head;
        while (curr)
        {
            if (visited.find(curr) != visited.end())
            {
                return true;
            }
            visited.insert(curr);
            curr = curr->next;
        }
        return false;
    }
};
```

- Time - `O(n)`
- Space - `O(n)`
- Where `n` is the number of nodes.

## Solution 2 - Two Pointers

```c++
class Solution
{
public:
    bool hasCycle(ListNode *head)
    {
        ListNode *slow = head, *fast = head;
        while (fast && fast->next)
        {
            slow = slow->next;
            fast = fast->next->next;
            if (slow == fast)
            {
                return true;
            }
        }
        return false;
    }
};
```

- Time - `O(n)`
- Space - `O(1)`
- Where `n` is the number of nodes.