/* 

Binary search

Time - O(n*log(max))
Space - O(1)

*/


const numberOfBouquetsPossible = (bloomDay, m, k, currDay) => {

    let count = 0, bouquets = 0;

    for (let i = 0; i < bloomDay.length; i++) {
        if (currDay >= bloomDay[i]) {
            count++;
            if (count === k) {
                count = 0;
                bouquets++;
            }
        }
        else {
            count = 0;
        }
    }

    return bouquets;
};

const minDays = function (bloomDay, m, k) {

    let min = Number.MAX_VALUE, max = -Number.MAX_VALUE;

    for (let i = 0; i < bloomDay.length; i++) {
        min = Math.min(min, bloomDay[i]);
        max = Math.max(max, bloomDay[i]);
    }

    let start = min, end = max, mid, result = -1;

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        const bouquets = numberOfBouquetsPossible(bloomDay, m, k, mid);
        if (bouquets >= m) {
            result = mid;
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    return result;
};