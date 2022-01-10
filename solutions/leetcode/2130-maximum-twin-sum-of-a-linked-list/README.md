# [2130. Maximum Twin Sum of a Linked List](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/)

## Solution 1 - Reverse + Two pointers

```js
const pairSum = function (head) {
    let slow = head,
        fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let curr = slow,
        prev = null;
    while (curr !== null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    let left = head,
        right = prev,
        result = 0;
    while (right !== null) {
        result = Math.max(result, left.val + right.val);
        left = left.next;
        right = right.next;
    }
    return result;
};
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the number of nodes.
