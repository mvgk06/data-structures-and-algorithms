# [268. Missing Number](https://leetcode.com/problems/missing-number/)

## Solution 1 - Sort

```js
const missingNumber = function (nums) {
    let n = nums.length;
    nums.sort((first, second) => {
        if (first < second) {
            return -1;
        }
        return 1;
    });
    for (let i = 0; i < n; i++) {
        if (i !== nums[i]) {
            return i;
        }
    }
    return n;
};
```

-   Time - `O(nlogn)`
-   Space - `O(n)`
-   Where `n` is the size of the array.

## Solution 2 - Hash set

```js
const missingNumber = function (nums) {
    let n = nums.length,
        set = new Set();
    for (let i = 0; i < n; i++) {
        set.add(nums[i]);
    }
    for (let i = 0; i <= n; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the size of the array.

## Solution 3 - Bit manipulation

```js
const missingNumber = function (nums) {
    let n = nums.length,
        curr = n;
    for (let i = 0; i < n; i++) {
        curr ^= i ^ nums[i];
    }
    return curr;
};
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the size of the array.

## Solution 4 - Math

```js
const missingNumber = function (nums) {
    let n = nums.length,
        total = Math.floor((n * (n + 1)) / 2),
        curr = 0;
    for (let i = 0; i < n; i++) {
        curr += nums[i];
    }
    return total - curr;
};
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the size of the array.
