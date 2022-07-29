# [189. Rotate Array](https://leetcode.com/problems/rotate-array/)

## Solution 1 - Brute Force

```py
class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        n = len(nums)
        k %= n
        temp_nums = []
        for i in range(n-k, n):
            temp_nums.append(nums[i])
        for i in range(0, n-k):
            temp_nums.append(nums[i])
        for i in range(0, n):
            nums[i] = temp_nums[i]
```

- Time - `O(n)`
- Space - `O(n)`
- Where `n` is the size of `nums`.

## Solution 2 - Reverse

```py
class Solution:
    def reverse_nums(self, nums, start, end):
        while start < end:
            nums[start], nums[end] = nums[end], nums[start]
            start += 1
            end -= 1

    def rotate(self, nums: List[int], k: int) -> None:
        n = len(nums)
        k %= n
        self.reverse_nums(nums, 0, n-k-1)
        self.reverse_nums(nums, n-k, n-1)
        self.reverse_nums(nums, 0, n-1)
```

- Time - `O(n)`
- Space - `O(1)`
- Where `n` is the size of `nums`.