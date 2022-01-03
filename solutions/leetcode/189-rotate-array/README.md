# [189. Rotate Array](https://leetcode.com/problems/rotate-array/)

## Solution 1 - Brute force

-   Rotate the array to the right by one element for `k` times.
-   Complexity
    -   Time - `O(n*k)`
    -   Space - `O(1)`
    -   Where `n` is the size of the array and `k` is the number of rotations.

```js
const rotateRight = (nums) => {
    const n = nums.length,
        temp = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        nums[i + 1] = nums[i];
    }
    nums[0] = temp;
};

const rotate = function (nums, k) {
    const n = nums.length;
    k %= n;
    for (let i = 1; i <= k; i++) {
        rotateRight(nums);
    }
};
```

## Solution 2 - Copy `k` elements

-   Copy the last `k` elements in a temp array.
-   Shift the first `n-k` elements to the right by `k` indices.
-   Copy the elements from the temp array back to the input array for the first `k` indicies.
-   Complexity
    -   Time - `O(n)`
    -   Space - `O(k)`
    -   Where `n` is the size of the array and `k` is the number of rotations.

```js
const rotate = function (nums, k) {
    const n = nums.length,
        temp = [];
    k %= n;
    for (let i = n - k; i < n; i++) {
        temp.push(nums[i]);
    }
    for (let i = n - k - 1; i >= 0; i--) {
        nums[i + k] = nums[i];
    }
    for (let i = 0; i < k; i++) {
        nums[i] = temp[i];
    }
};
```

## Solution 3 - Reverse

-   Reverse the first `n-k` elements.
-   Reverse the last `k` elements.
-   Reverse `n` elements.
-   Complexity
    -   Time - `O(n)`
    -   Space - `O(1)`
    -   Where `n` is the size of the array.

```js
const reverse = (arr, i, j) => {
    while (i < j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
};

const rotate = function (nums, k) {
    const n = nums.length;
    k %= n;
    reverse(nums, 0, n - k - 1);
    reverse(nums, n - k, n - 1);
    reverse(nums, 0, n - 1);
};
```
