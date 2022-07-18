# [210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)

## Solution 1 - BFS

```c++
class Solution
{
public:
    bool helper(vector<vector<int>> &graph, vector<int> &indegree, vector<int> &res)
    {
        queue<int> q;
        for (int i = 0; i < indegree.size(); i++)
        {
            if (indegree[i] == 0)
            {
                q.push(i);
            }
        }
        while (!q.empty())
        {
            int curr = q.front();
            q.pop();
            res.push_back(curr);
            for (int adj : graph[curr])
            {
                indegree[adj]--;
                if (indegree[adj] == 0)
                {
                    q.push(adj);
                }
            }
        }
        return res.size() != graph.size();
    }
    vector<int> findOrder(int numCourses, vector<vector<int>> &prerequisites)
    {
        vector<vector<int>> graph;
        for (int i = 0; i < numCourses; i++)
        {
            vector<int> row;
            graph.push_back(row);
        }
        vector<int> indegree(numCourses, 0);
        for (int i = 0; i < prerequisites.size(); i++)
        {
            graph[prerequisites[i][1]].push_back(prerequisites[i][0]);
            indegree[prerequisites[i][0]]++;
        }
        vector<int> res;
        if (helper(graph, indegree, res))
        {
            return {};
        }
        return res;
    }
};
```

- Time - `O(n+e)`
- Space - `O(n+e)`
- Where `n` is the number of nodes and `e` is the number of edges.

## Solution 2 - DFS

```c++
class Solution
{
public:
    bool helper(vector<vector<int>> &graph, vector<bool> &visited, vector<bool> &active, stack<int> &st, int curr)
    {
        visited[curr] = true;
        active[curr] = true;
        for (int adj : graph[curr])
        {
            if (!visited[adj])
            {
                if (helper(graph, visited, active, st, adj))
                {
                    return true;
                }
            }
            else if (active[adj])
            {
                return true;
            }
        }
        active[curr] = false;
        st.push(curr);
        return false;
    }
    vector<int> findOrder(int numCourses, vector<vector<int>> &prerequisites)
    {
        vector<vector<int>> graph;
        for (int i = 0; i < numCourses; i++)
        {
            vector<int> row;
            graph.push_back(row);
        }
        for (int i = 0; i < prerequisites.size(); i++)
        {
            graph[prerequisites[i][1]].push_back(prerequisites[i][0]);
        }
        vector<bool> visited(numCourses, false), active(numCourses, false);
        stack<int> st;
        for (int i = 0; i < numCourses; i++)
        {
            if (!visited[i])
            {
                if (helper(graph, visited, active, st, i))
                {
                    return {};
                }
            }
        }
        vector<int> res;
        while (!st.empty())
        {
            res.push_back(st.top());
            st.pop();
        }
        return res;
    }
};
```

- Time - `O(n+e)`
- Space - `O(n+e)`
- Where `n` is the number of nodes and `e` is the number of edges.