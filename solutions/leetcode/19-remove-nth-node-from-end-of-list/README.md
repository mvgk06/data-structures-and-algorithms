# [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

## Solution 1 - Brute force

```js
const removeNthFromEnd = function (head, n) {
    if (head === null) {
        return head;
    }
    let size = 0,
        curr = head;
    while (curr !== null) {
        curr = curr.next;
        size++;
    }
    curr = head;
    let index = 0,
        target = size - n,
        prev = null;
    while (curr !== null && index !== target) {
        prev = curr;
        curr = curr.next;
        index++;
    }
    if (prev === null) {
        return curr.next;
    }
    prev.next = curr.next;
    return head;
};
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the number of nodes.

## Solution 2 - Two pointers

```js
const removeNthFromEnd = function (head, n) {
    if (head === null) {
        return head;
    }
    let index = 1,
        slow = head,
        fast = head;
    while (fast !== null && index !== n) {
        fast = fast.next;
        index++;
    }
    let prev = null;
    while (fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next;
    }
    if (prev === null) {
        return slow.next;
    }
    prev.next = slow.next;
    return head;
};
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the number of nodes.
