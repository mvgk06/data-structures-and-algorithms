/*

Problem
https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1

Approach
- Sort the array in decreasing order of (value/weight) ratio.
- For each item pick the entire weight or partial weight (if partial weight is picked then capacity becomes 0 so break the loop).
- Return the value.

Time - O(n*log(n))
Space - O(1)

n - number of items

*/

class Solution {

    fractionalKnapsack(capacity, arr, n) {
        arr.sort((a, b) => {
            if ((a.value / a.weight) > (b.value / b.weight)) {
                return -1;
            }
            return 1;
        });

        let value = 0;
        for (let i = 0; i < n; i++) {
            if (arr[i].weight <= capacity) {
                value += arr[i].value;
                capacity -= arr[i].weight;
            }
            else {
                value += (arr[i].value / arr[i].weight) * capacity;
                break;
            }
        }

        return value;
    }
}