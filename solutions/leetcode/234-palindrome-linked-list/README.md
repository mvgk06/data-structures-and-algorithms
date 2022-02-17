# [234. Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)

## Solution 1 - Brute force

```js
const reverse = (head) => {
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

const isPalindrome = function (head) {
    const dummy = new ListNode(0);
    let curr = head,
        copy = dummy;
    while (curr !== null) {
        const node = new ListNode(curr.val);
        copy.next = node;
        copy = node;
        curr = curr.next;
    }
    const revHead = reverse(dummy.next);
    let left = head,
        right = revHead;
    while (left !== null && right !== null) {
        if (left.val !== right.val) {
            return false;
        }
        left = left.next;
        right = right.next;
    }
    return true;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - Two pointers

```js
const getMid = (head) => {
    let slow = head,
        fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

const reverse = (head) => {
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

const isPalindrome = function (head) {
    if (head === null || head.next === null) {
        return true;
    }
    const mid = getMid(head);
    const revHead = reverse(mid);
    let left = head,
        right = revHead;
    while (left !== null && right !== null) {
        if (left.val !== right.val) {
            return false;
        }
        left = left.next;
        right = right.next;
    }
    return true;
};
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the number of nodes.
