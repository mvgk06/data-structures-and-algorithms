# [1310. XOR Queries of a Subarray](https://leetcode.com/problems/xor-queries-of-a-subarray/)

## Solution 1 - Prefix XOR

```js
const helper = (prefix, l, r) => {
    if (l === 0) {
        return prefix[r];
    }
    return prefix[r] ^ prefix[l - 1];
};

const xorQueries = function (arr, queries) {
    const n = arr.length,
        prefix = new Array(n);
    prefix[0] = arr[0];
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] ^ arr[i];
    }
    const result = [];
    for (const [l, r] of queries) {
        result.push(helper(prefix, l, r));
    }
    return result;
};
```

-   Time - `O(n+q)`
-   Space - `O(n)`
-   Where `n` is the size of the array, `q` is the number of queries.
