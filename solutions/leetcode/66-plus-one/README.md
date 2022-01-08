# [66. Plus One](https://leetcode.com/problems/plus-one/)

## Solution 1 - Sum and carry

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

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the size of the array.
