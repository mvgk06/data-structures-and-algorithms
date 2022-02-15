# [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

## Solution 1 - Recursive

```js
const helper = (curr, prev) => {
    if (curr === null) {
        return prev;
    }
    const next = curr.next;
    curr.next = prev;
    return helper(next, curr);
};

const reverseList = function (head) {
    return helper(head, null);
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - Iterative

```js
const reverseList = function (head) {
    let prev = null,
        curr = head;
    while (curr !== null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the number of nodes.
