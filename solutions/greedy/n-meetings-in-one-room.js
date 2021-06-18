/*

Problem
https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1

Approach
- Store the start and end time in an array.
- Sort the array in decreasing order of end time.
- Choose the first time as a part of solution.
- For each element if end of last picked time is less than start of current time then increament the count and mark the current time as last picked time.
- Return the count.

Time - O(n*log(n))
Space - O(n)

n - number of meetings

*/

class Solution {

    maxMeetings(start, end, n) {

        const times = new Array(n);

        for (let i = 0; i < n; i++) {
            times[i] = [start[i], end[i]];
        }

        times.sort((a, b) => {
            if (a[1] <= b[1]) {
                return -1;
            }
            return 1;
        });

        let count = 1, i = 0;
        for (let j = 1; j < n; j++) {
            if (times[i][1] < times[j][0]) {
                count++;
                i = j;
            }
        }

        return count;
    }
}