# [2124. Check if All A's Appears Before All B's](https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/)

## Solution 1 - Sort

-   Sort the copy of the string in increasing order.
-   If the input string is equal to the sorted string, then return true.
-   Else return false.
-   Complexity
    -   Time - `O(nlogn)`
    -   Space - `O(n)`
    -   Where `n` is the size of the string.

```js
const checkString = function (s) {
    const sortedStr = s
        .split('')
        .sort((first, second) => {
            if (first < second) {
                return -1;
            }
            return 1;
        })
        .join('');
    return s === sortedStr;
};
```

## Solution 2 - Check occurrence of `ba`

-   Traverse the input string and if `a` appears after `b`, then return false.
-   Else return true.
-   Complexity
    -   Time - `O(n)`
    -   Space - `O(1)`
    -   Where `n` is the size of the string.

```js
const checkString = function (s) {
    for (let i = 1; i < s.length; i++) {
        if (s[i] === 'a' && s[i - 1] === 'b') {
            return false;
        }
    }
    return true;
};
```

## Solution 3 - Check index of `a` and `b`

-   If the largest index of `a` is smaller than the smallest index of `b`, then return true.
-   Else return false.
-   Complexity
    -   Time - `O(n)`
    -   Space - `O(1)`
    -   Where `n` is the size of the string.

```js
const checkString = function (s) {
    let largestA = -1,
        smallestB = 100;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            largestA = Math.max(largestA, i);
        } else {
            smallestB = Math.min(smallestB, i);
        }
    }
    return largestA < smallestB;
};
```
