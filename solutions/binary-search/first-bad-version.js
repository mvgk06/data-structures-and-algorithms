/*

Problem
https://leetcode.com/problems/first-bad-version/

Approach
- Consider the range from 0 to n as the search space.
- Divide the range into two.
- If the mid is a bad version, mark it as potential result and search on the left subarray.
- Else search on the right subarray.

Time - O(log(n))
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