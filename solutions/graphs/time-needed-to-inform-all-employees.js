/*

DFS

Time - O(n+e)
Space - O(n+e)

*/

const numOfMinutes = function (n, headID, manager, informTime) {

    const graph = new Array(n);

    for (let i = 0; i < graph.length; i++) {
        graph[i] = [];
    }

    for (let i = 0; i < manager.length; i++) {
        if (manager[i] != -1) {
            graph[manager[i]].push(i);
        }
    }

    let result = 0;

    const dfs = (graph, informTime, curr, currTime) => {
        result = Math.max(result, currTime);
        for (let i = 0; i < graph[curr].length; i++) {
            const adjacent = graph[curr][i];
            dfs(graph, informTime, adjacent, currTime + informTime[curr]);
        }
    };

    dfs(graph, informTime, headID, 0, 0);

    return result;

};

/*

BFS

Time - O(n+e)
Space - O(n+e)

*/

const Deque = require("../../data-structures/deque");

const bfs = (graph, head, informTime) => {

    const queue = new Deque();
    queue.push([head, 0]);

    let result = 0;
    while (queue.getSize() > 0) {
        const [curr, currTime] = queue.getFront();
        queue.deque();
        result = Math.max(result, currTime);
        for (let i = 0; i < graph[curr].length; i++) {
            const adjacent = graph[curr][i];
            queue.push([adjacent, currTime + informTime[curr]]);
        }
    }

    return result;
};

const numOfMinutes2 = function (n, headID, manager, informTime) {

    const graph = new Array(n);

    for (let i = 0; i < graph.length; i++) {
        graph[i] = [];
    }

    for (let i = 0; i < manager.length; i++) {
        if (manager[i] != -1) {
            graph[manager[i]].push(i);
        }
    }

    return bfs(graph, headID, informTime);

};