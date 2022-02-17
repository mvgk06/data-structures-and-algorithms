# [344. Reverse String](https://leetcode.com/problems/reverse-string/)

## Solution 1 - Two pointers

```js
const reverseString = function (s) {
    let start = 0,
        end = s.length - 1;
    while (start < end) {
        const temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
    return s;
};
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the size of the array.
