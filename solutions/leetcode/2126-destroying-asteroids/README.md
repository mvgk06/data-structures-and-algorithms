# [2126. Destroying Asteroids](https://leetcode.com/problems/destroying-asteroids/)

## Solution 1 - Greedy

-   If an asteroid will destroy the planet, then all the larger asteroids will also destroy the planet.
-   Greedily collide the planet with the sorted order (increasing) of the asteroids.
-   If the mass of the planet is greater than or equal to the current asteroid, then increase the mass of the planet by mass of the current asteroid.
-   Else return false.
-   Return true.
-   Complexity
    -   Time - `O(nlogn)`
    -   Space - `O(n)`
    -   Where `n` is the size of the array.

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
