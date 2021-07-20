/*

Problem

https://leetcode.com/problems/reverse-linked-list/

Approach

1. Recursion
- Make the current's next point to prev.
- Recursive reverse the smaller linked list.
- If the current is null, then return previous.

Time - O(n)
Space - O(n)

2. Iterative
- Initialize the previous as null, current as head.
- While current is not null, make the current's next point to prev.
- Update positions of previous and current.
- Return previous.

Time - O(n)
Space - O(1)

*/

/* Recursion */

const reverse = (prev, curr) => {
    if (curr === null) {
        return prev;
    }
    const next = curr.next;
    curr.next = prev;
    return reverse(curr, next);
};

const reverseList = function (head) {
    return reverse(null, head);
};

/* Iterative */

const reverseList2 = function (head) {
    let prev = null, curr = head;
    while (curr != null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};