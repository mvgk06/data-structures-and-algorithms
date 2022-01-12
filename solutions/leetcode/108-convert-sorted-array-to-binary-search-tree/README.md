# [108. Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)

## Solution 1 - DFS

```js
const helper = (nums, start, end) => {
    if (start > end) {
        return null;
    }
    const mid = Math.floor(start + (end - start) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = helper(nums, start, mid - 1);
    root.right = helper(nums, mid + 1, end);
    return root;
};

const sortedArrayToBST = function (nums) {
    return helper(nums, 0, nums.length - 1);
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - BFS

```js
const sortedArrayToBST = function (nums) {
    const queue = new Queue();
    const root = new TreeNode();
    queue.push([root, 0, nums.length - 1]);
    while (queue.getSize() > 0) {
        const [curr, start, end] = queue.getFront();
        queue.pop();
        const mid = Math.floor(start + (end - start) / 2);
        curr.val = nums[mid];
        curr.left = start <= mid - 1 ? new TreeNode() : null;
        curr.right = mid + 1 <= end ? new TreeNode() : null;
        if (curr.left !== null) {
            queue.push([curr.left, start, mid - 1]);
        }
        if (curr.right !== null) {
            queue.push([curr.right, mid + 1, end]);
        }
    }
    return root;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
