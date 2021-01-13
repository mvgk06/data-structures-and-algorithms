/*

Map + Sort + Binary search

Time - O(n*log(n))
Space - O(n)

*/

const getRightInterval = (intervals, target) => {

    let start = 0, end = intervals.length - 1, mid, result = -1;

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (intervals[mid][0] >= target) {
            result = intervals[mid];
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    return result;
};

const findRightInterval = function (intervals) {

    const map = new Map();

    for (let i = 0; i < intervals.length; i++) {
        map.set(intervals[i][0], i);
    }

    intervals.sort((a, b) => {
        return a[0] < b[0] ? -1 : 1;
    });

    const rightIntervals = new Array(intervals.length);

    for (let i = 0; i < intervals.length; i++) {
        const interval = getRightInterval(intervals, intervals[i][1]);
        if (interval === -1) {
            rightIntervals[map.get(intervals[i][0])] = -1;
        }
        else {
            rightIntervals[map.get(intervals[i][0])] = map.get(interval[0]);
        }
    }


    return rightIntervals;
};