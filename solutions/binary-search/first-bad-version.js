/*

Binary search

Time - O(log n)
Space - O(1)

*/

const solution = function (isBadVersion) {

    return function (n) {

        let start = 0, end = n, mid, result = -1;

        while (start <= end) {
            mid = Math.floor(start + (end - start) / 2);
            if (isBadVersion(mid)) {
                result = mid;
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        return result;
    };
};