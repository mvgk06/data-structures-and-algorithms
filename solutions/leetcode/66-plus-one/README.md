# [66. Plus One](https://leetcode.com/problems/plus-one/)

## Solution 1 - Sum and carry

-   Initialize the carry as 1.
-   Traverse the array backwards, update the sum, push the unit digit of the sum into the result and update the carry.
-   Return the reverse of the result.
-   Complexity
    -   Time - `O(n)`
    -   Space - `O(1)`
    -   Where `n` is the size of the array.

```js
const plusOne = function (digits) {
    let carry = 1;
    const result = [];
    for (let i = digits.length - 1; i >= 0; i--) {
        const sum = carry + digits[i];
        result.push(sum % 10);
        carry = Math.floor(sum / 10);
    }
    if (carry === 1) {
        result.push(carry);
    }
    return result.reverse();
};
```
