# [328. Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/)

## Solution 1 - Two pointers

```js
const oddEvenList = function (head) {
    const dummyOdd = new ListNode(0),
        dummyEven = new ListNode(0);
    let i = 1,
        curr = head,
        currOdd = dummyOdd,
        currEven = dummyEven;
    while (curr !== null) {
        if (i % 2 !== 0) {
            currOdd.next = curr;
            currOdd = curr;
        } else {
            currEven.next = curr;
            currEven = curr;
        }
        curr = curr.next;
        i++;
    }
    currOdd.next = dummyEven.next;
    currEven.next = null;
    return dummyOdd.next;
};
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the number of nodes.
