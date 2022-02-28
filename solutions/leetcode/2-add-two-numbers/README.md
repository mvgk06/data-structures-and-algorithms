# [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)

## Solution 1 - Two pointers

```js
const addTwoNumbers = function (l1, l2) {
    let left = l1,
        right = l2,
        carry = 0,
        dummy = new ListNode(0),
        curr = dummy;
    while (left !== null || right !== null) {
        let sum = (left ? left.val : 0) + (right ? right.val : 0) + carry;
        if (sum > 9) {
            carry = Math.floor(sum / 10);
            sum = sum % 10;
        } else {
            carry = 0;
        }
        const node = new ListNode(sum);
        curr.next = node;
        curr = node;
        left = left ? left.next : null;
        right = right ? right.next : null;
    }
    if (carry !== 0) {
        const node = new ListNode(carry);
        curr.next = node;
        curr = node;
    }
    return dummy.next;
};
```

-   Time - `O(max(n,m))`
-   Space - `O(max(n,m))`
-   Where `n` and `m` are the number of nodes in list 1 and 2.
