# [2126. Destroying Asteroids](https://leetcode.com/problems/destroying-asteroids/)

## Solution 1 - Greedy

```js
const asteroidsDestroyed = function (mass, asteroids) {
    asteroids.sort((a, b) => {
        if (a <= b) {
            return -1;
        }
        return 1;
    });
    for (let i = 0; i < asteroids.length; i++) {
        if (mass >= asteroids[i]) {
            mass += asteroids[i];
        } else {
            return false;
        }
    }
    return true;
};
```

-   Time - `O(nlogn)`
-   Space - `O(n)`
-   Where `n` is the size of the array.
