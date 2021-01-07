/*

Binary search

Time - O(n*log(max))
Space - O(1)

*/

const validEatingSpeed = (piles, H, currSpeed) => {

    let time = 0;

    for (let i = 0; i < piles.length; i++) {
        if (piles[i] > currSpeed) {
            time += Math.ceil(piles[i] / currSpeed);
        }
        else {
            time++;
        }
        if (time > H) {
            return false;
        }
    }

    if (time <= H) {
        return true;
    }

    return false;
};

const minEatingSpeed = function (piles, H) {

    let sum = 0;

    for (let i = 0; i < piles.length; i++) {
        sum += piles[i];
    }

    let start = 1, end = sum, mid, result = -1;

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (validEatingSpeed(piles, H, mid)) {
            result = mid;
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    return result;
};