/* 

Problem
https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/

Approach
- Consider the range from 1 to maximum element as the search space.
- Divide the range into two.
- If using the mid as number of days it is possible to make m bouquets then mark the mid as potential result and search on the left subarray.
- Else search on the right subarray.

Time - O(nlog(max))
Space - O(1)

*/


const isBouquetPossible = (bloomDay, m, k, mid) => {

    let flowers = 0, bouquets = 0;
    for (let i = 0; i < bloomDay.length; i++) {
        if (mid >= bloomDay[i]) {
            flowers++;
            if (flowers === k) {
                bouquets++;
                flowers = 0;
            }
        }
        else {
            flowers = 0;
        }
        if (bouquets === m) {
            return true;
        }
    }

    return false;
};

const minDays = function (bloomDay, m, k) {

    let max = -Number.MAX_VALUE;

    for (let i = 0; i < bloomDay.length; i++) {
        max = Math.max(max, bloomDay[i]);
    }

    let start = 1, end = max, result = -1;
    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        if (isBouquetPossible(bloomDay, m, k, mid)) {
            result = mid;
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    return result;
};