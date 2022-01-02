# [2125. Number of Laser Beams in a Bank](https://leetcode.com/problems/number-of-laser-beams-in-a-bank/)

## Solution 1 - Two pointers

-   Traverse the matrix and build a count array.
-   Use two pointers, `i` to keep track of the last bank with non-zero devices and `j` to traverse the input.
-   If the current bank has non-zero devices, then update the result and set `i` as `j`.
-   Return the result.
-   Complexity
    -   Time - `O(mn)`
    -   Space - `O(m)`
    -   Where `m` is the number of rows and `n` is the number of columns of the matrix.

```js
const numberOfBeams = function (bank) {
    const arr = new Array(bank.length).fill(0);
    for (let i = 0; i < bank.length; i++) {
        let count = 0;
        for (let j = 0; j < bank[i].length; j++) {
            if (bank[i][j] === '1') {
                count++;
            }
        }
        arr[i] = count;
    }
    let i = 0,
        result = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== 0) {
            result += arr[i] * arr[j];
            i = j;
        }
    }
    return result;
};
```

## Solution 2 - Two pointers (space optimized)

-   Instead of building a count array just keep track of the previous count.
-   Complexity
    -   Time - `O(mn)`
    -   Space - `O(1)`
    -   Where `m` is the number of rows and `n` is the number of columns of the matrix.

```js
const numberOfBeams = function (bank) {
    let aCount = 0,
        result = 0;
    for (let i = 0; i < bank.length; i++) {
        let bCount = 0;
        for (let j = 0; j < bank[i].length; j++) {
            if (bank[i][j] === '1') {
                bCount++;
            }
        }
        if (bCount !== 0) {
            result += aCount * bCount;
            aCount = bCount;
        }
    }
    return result;
};
```
