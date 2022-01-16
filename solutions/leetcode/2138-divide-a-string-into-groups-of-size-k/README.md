# [2138. Divide a String Into Groups of Size k](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/)

## Solution 1 - Two pointers

```js
const divideString = function (s, k, fill) {
    const result = [];
    let i = 0,
        j = 1;
    while (j < s.length) {
        if (j - i === k) {
            result.push(s.substring(i, j));
            i = j;
        }
        j++;
    }
    result.push(s.substring(i, j));
    const last = result.pop();
    if (last.length !== k) {
        result.push(last + fill.repeat(k - last.length));
    } else {
        result.push(last);
    }
    return result;
};
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the size of the string.

## Solution 2 - Optimized

```js
const divideString = function (s, k, fill) {
    const result = [];
    let i = 0;
    while (i < s.length) {
        result.push(s.substring(i, i + k));
        i += k;
    }
    const last = result.pop();
    if (last.length !== k) {
        result.push(last + fill.repeat(k - last.length));
    } else {
        result.push(last);
    }
    return result;
};
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the size of the string.
