# [237. Delete Node in a Linked List](https://leetcode.com/problems/delete-node-in-a-linked-list/)

## Solution 1 - Brute force

```js
const deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
```

-   Time - `O(1)`
-   Space - `O(1)`
