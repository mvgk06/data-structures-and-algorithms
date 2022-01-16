# [2139. Minimum Moves to Reach Target Score](https://leetcode.com/problems/minimum-moves-to-reach-target-score/)

## Solution 1 - Greedy

```js
const minMoves = function (target, maxDoubles) {
    let result = 0;
    while (target > 1 && maxDoubles > 0) {
        if (target % 2 === 0) {
            target /= 2;
            maxDoubles--;
        } else {
            target -= 1;
        }
        result++;
    }
    return result + target - 1;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the target number.
