# [2125. Number of Laser Beams in a Bank](https://leetcode.com/problems/number-of-laser-beams-in-a-bank/)

## Solution 1 - Two pointers

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

-   Time - `O(mn)`
-   Space - `O(m)`
-   Where `m` is the number of rows and `n` is the number of columns of the matrix.

## Solution 2 - Two pointers (space optimized)

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

-   Time - `O(mn)`
-   Space - `O(1)`
-   Where `m` is the number of rows and `n` is the number of columns of the matrix.
