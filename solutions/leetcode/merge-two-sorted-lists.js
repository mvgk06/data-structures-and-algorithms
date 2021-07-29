/*

Problem

https://leetcode.com/problems/merge-two-sorted-lists/

Approach
- Use two pointers left and right initialized to the head of the two sorted lists.
- Compare the values of the left and right pointer and merge the two lists.
- Return the head of the merged list.

Time - O(n)
Space - O(1)

n - number of nodes

*/

const mergeTwoLists = function (l1, l2) {
    if (l1 === null && l2 === null) {
        return null;
    }
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    let left = l1, right = l2, head = null, tail = null, isFirstNode = true;
    while (left != null && right != null) {
        if (left.val <= right.val) {
            if (isFirstNode) {
                head = left;
                tail = left;
                isFirstNode = false;
            }
            else {
                tail.next = left;
                tail = left;
            }
            left = left.next;
        }
        else {
            if (isFirstNode) {
                head = right;
                tail = right;
                isFirstNode = false;
            }
            else {
                tail.next = right;
                tail = right;
            }
            right = right.next;
        }
    }
    if (left != null) {
        tail.next = left;
        tail = left;
    }
    else if (right != null) {
        tail.next = right;
        tail = right;
    }
    return head;
};