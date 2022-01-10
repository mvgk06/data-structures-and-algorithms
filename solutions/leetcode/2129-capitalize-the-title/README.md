# [2129. Capitalize the Title](https://leetcode.com/problems/capitalize-the-title/)

## Solution 1 - Brute force

```js
const capitalizeTitle = function (title) {
    const arr = title.split(' ');
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 3) {
            result.push(arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1).toLowerCase());
        } else {
            result.push(arr[i].toLowerCase());
        }
    }
    return result.join(' ');
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the size of the array.
