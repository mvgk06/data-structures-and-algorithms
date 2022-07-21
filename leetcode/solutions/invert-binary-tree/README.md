# [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)

## Solution 1 - DFS

```c++
class Solution
{
public:
    TreeNode *invertTree(TreeNode *root)
    {
        if (!root)
        {
            return nullptr;
        }
        swap(root->left, root->right);
        invertTree(root->left);
        invertTree(root->right);
        return root;
    }
};
```

- Time - `O(n)`
- Space - `O(n)`
- Where `n` is the number of nodes.

## Solution 2 - BFS

```c++
class Solution
{
public:
    TreeNode *invertTree(TreeNode *root)
    {
        if (!root)
        {
            return nullptr;
        }
        queue<TreeNode *> q;
        q.push(root);
        while (!q.empty())
        {
            TreeNode *curr = q.front();
            q.pop();
            swap(curr->left, curr->right);
            if (curr->left)
            {
                q.push(curr->left);
            }
            if (curr->right)
            {
                q.push(curr->right);
            }
        }
        return root;
    }
};
```

- Time - `O(n)`
- Space - `O(n)`
- Where `n` is the number of nodes.