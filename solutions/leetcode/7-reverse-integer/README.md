# [7. Reverse Integer](https://leetcode.com/problems/reverse-integer/)

## Solution 1 - Brute force

```js
const reverse = function (x) {
    const max = Math.pow(2, 31);
    let n = Math.abs(x),
        rev = 0;
    while (n != 0) {
        if (rev >= max / 10 && n % 10 !== 0) {
            return 0;
        }
        rev *= 10;
        rev += n % 10;
        n = Math.floor(n / 10);
    }
    return x < 0 ? -rev : rev;
};
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the number of digits.
