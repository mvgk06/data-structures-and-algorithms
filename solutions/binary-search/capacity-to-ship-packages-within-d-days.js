/* 

Problem
https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/

Approach
- Consider the range from minimum weight till the total weight as the search space.
- Divide the range into two.
- If using the mid as the capacity you can ship all the packages within d days then mark the mid as potential result and search on the left subarray.
- Else search on the right subarray.

Time - O(nlog(sum))
Space - O(1)

*/

const canShipWithinDays = (weights, maxDays, maxCapacity) => {

    let currCapacity = 0, daysPassed = 1, i = 0;

    while (i < weights.length) {
        if (weights[i] > maxCapacity) {
            return false;
        }
        else {
            if (currCapacity + weights[i] <= maxCapacity) {
                currCapacity += weights[i];
                i++;
            }
            else {
                currCapacity = 0;
                daysPassed++;
            }
        }
    }

    if (daysPassed <= maxDays) {
        return true;
    }
    return false;
};

const shipWithinDays = function (weights, maxDays) {

    let minWeight = Number.MAX_VALUE, totalWeight = 0;

    for (let i = 0; i < weights.length; i++) {
        minWeight = Math.min(minWeight, weights[i]);
        totalWeight += weights[i];
    }

    let start = minWeight, end = totalWeight, mid, result = -1;

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (canShipWithinDays(weights, maxDays, mid)) {
            result = mid;
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    return result;
};