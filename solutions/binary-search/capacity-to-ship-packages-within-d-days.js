/* 

Binary search

Time - O(n*log(sum))
Space - O(1)

*/

const possibleToShipPackages = (weights, D, currCapacity) => {

    let days = 0, currWeight = 0;

    for (let i = 0; i < weights.length; i++) {
        if (currWeight + weights[i] > currCapacity) {
            currWeight = weights[i];
            days++;

            if (days > D) {
                return false;
            }
        }
        else {
            currWeight += weights[i];
        }
    }

    // To ship the last package we need a day
    days++;

    if (days <= D) {
        return true;
    }

    return false;

};

const shipWithinDays = function (weights, D) {

    let max = Number.MIN_VALUE, sum = 0;

    for (let i = 0; i < weights.length; i++) {
        max = Math.max(max, weights[i]);
        sum += weights[i];
    }

    let start = max, end = sum, mid, result = -1;

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (possibleToShipPackages(weights, D, mid)) {
            result = mid;
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    return result;
};