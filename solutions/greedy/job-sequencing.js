/*

Problem
https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1

Approach
- Sort the jobs in decreasing order of profit.
- For each job perform it at the last day of the deadline in order to do more jobs and maximize the profit.
- Return the count and the profit.

Time - O(n*m)
Space - O(m)

n - number of jobs
m - deadline

*/

class Solution {

    JobScheduling(arr, n) {

        arr.sort((a, b) => {
            if (a.profit > b.profit) {
                return -1;
            }
            return 1;
        });

        let maxDead = 0;
        for (let i = 0; i < n; i++) {
            maxDead = Math.max(maxDead, arr[i].dead);
        }

        const times = new Array(maxDead + 1).fill(-1);

        let count = 0, profit = 0;
        for (let i = 0; i < n; i++) {
            for (let j = arr[i].dead; j >= 1; j--) {
                if (times[j] === -1) {
                    times[j] = arr[i].id;
                    count++;
                    profit += arr[i].profit;
                    break;
                }
            }
        }

        return [count, profit];
    }
}