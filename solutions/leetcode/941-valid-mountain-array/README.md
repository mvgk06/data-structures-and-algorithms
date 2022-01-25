# [941. Valid Mountain Array](https://leetcode.com/problems/valid-mountain-array/)

## Solution 1 - Brute force

```js
const validMountainArray = function (arr) {
    const n = arr.length;
    if (n < 3) {
        return false;
    }
    for (let i = 1; i < n - 1; i++) {
        let isDec = true;
        for (let j = i; j > 0; j--) {
            if (arr[j] <= arr[j - 1]) {
                isDec = false;
                break;
            }
        }
        if (!isDec) {
            continue;
        }
        for (let j = i; j < n - 1; j++) {
            if (arr[j] <= arr[j + 1]) {
                isDec = false;
                break;
            }
        }
        if (isDec) {
            return true;
        }
    }
    return false;
};
```

-   Time - `O(n^2)`
-   Space - `O(1)`
-   Where `n` is the size of the array.

## Solution 2 - Detect down hill

```js
const validMountainArray = function (arr) {
    const n = arr.length;
    if (n < 3) {
        return false;
    }
    let isDownHill = false,
        downHillStart = -1;
    for (let i = 1; i < n; i++) {
        if (!isDownHill && arr[i] < arr[i - 1]) {
            isDownHill = true;
            downHillStart = i;
        }
        if (isDownHill) {
            if (arr[i] >= arr[i - 1]) {
                return false;
            }
        } else {
            if (arr[i] <= arr[i - 1]) {
                return false;
            }
        }
    }
    return isDownHill && downHillStart !== 1;
};
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the size of the array.

## Solution 3 - Climb the mountain

```js
const validMountainArray = function (arr) {
    const n = arr.length;
    if (n < 3) {
        return false;
    }
    let i = 1;
    while (i < n && arr[i] > arr[i - 1]) {
        i++;
    }
    if (i === 1 || i === n) {
        return false;
    }
    while (i < n && arr[i] < arr[i - 1]) {
        i++;
    }
    return i === n;
};
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the size of the array.
