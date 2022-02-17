# [387. First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/)

## Solution 1 - Count

```js
const firstUniqChar = function (s) {
    const count = new Array(26).fill(0),
        base = 'a'.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        const index = s[i].charCodeAt(0) - base;
        count[index] += 1;
    }
    for (let i = 0; i < s.length; i++) {
        const index = s[i].charCodeAt(0) - base;
        if (count[index] === 1) {
            return i;
        }
    }
    return -1;
};
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the size of the string.
