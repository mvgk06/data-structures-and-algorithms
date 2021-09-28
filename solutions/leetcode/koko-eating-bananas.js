/*

Problem

https://leetcode.com/problems/koko-eating-bananas/

Approach
- Consider the range from 1 to sum of bananas as search space.
- Divide the range into two.
- The mid is the eating speed (ie the number of bananas that we can eat in an hour).
- If it is possible to eat all the bananas within h hours using mid as the eating speed, then mark it as potential result and search on the left subarray.
- Else search on the right subarray.

Time - O(nlog(sum))
Space - O(1)

n - number of elements
sum - sum of the elements

*/

const isPossibleToEat = (piles, h, mid) => {
    let hrsSpentToEat = 0;
    for (let i = 0; i < piles.length; i++) {
        if (piles[i] < mid) {
            hrsSpentToEat++;
        }
        else {
            hrsSpentToEat += Math.ceil(piles[i] / mid);
        }
        if (hrsSpentToEat > h) {
            return false;
        }
    }
    return true;
};

const minEatingSpeed = function (piles, h) {
    let sum = 0;
    for (let i = 0; i < piles.length; i++) {
        sum += piles[i];
    }
    let start = 1, end = sum, result = -1;
    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        if (isPossibleToEat(piles, h, mid)) {
            result = mid;
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return result;
};