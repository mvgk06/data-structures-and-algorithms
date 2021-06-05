/*

Problem
https://leetcode.com/problems/koko-eating-bananas/

Approach
- Consider the range from 1 to maximum element as search space.
- Divide the range into two.
- If using the mid as number of hours it is possible to eat all the bananas then mark it as potential result and search on the left subarray.
- Else search on the right subarray.

Time - O(nlog(max))
Space - O(1)

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

    let max = -Number.MAX_VALUE;

    for (let i = 0; i < piles.length; i++) {
        max = Math.max(max, piles[i]);
    }

    let start = 1, end = max, result = -1;
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