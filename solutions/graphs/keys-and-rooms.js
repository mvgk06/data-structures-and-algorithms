/*

DFS

Time - O(n+e)
Space - O(n+e)

*/

const dfs=(graph,visited,curr)=>{
    
    visited[curr]=true;

    for(let i=0;i<graph[curr].length;i++){
        const adjacent=graph[curr][i];
        if(!visited[adjacent]){
            dfs(graph,visited,adjacent);
        }
    }
    
}

const canVisitAllRooms = function(rooms) {
    
    const visited=new Array(rooms.length);
    visited.fill(false);
    
    
    dfs(rooms,visited,0);
    
    for(let i=0;i<visited.length;i++){
        if(!visited[i]){
            return false;
        }
    }
    
    return true;
};

/*

BFS

Time - O(n+e)
Space - O(n+e)

*/

const Deque=require("../../data-structures/deque.js");

const bfs=(graph,visited,src)=>{
    
    const queue=new Deque();
    visited[src]=true;
    queue.push(src);

    while(queue.getSize()>0){
        const curr=queue.getFront();
        queue.deque();
        for(let i=0;i<graph[curr].length;i++){
            const adjacent=graph[curr][i];
            if(!visited[adjacent]){
                visited[adjacent]=true;
                queue.push(adjacent);
            }
        }
    }
}

const canVisitAllRooms2 = function(rooms) {
    
    const visited=new Array(rooms.length);
    visited.fill(false);
    
    
    bfs(rooms,visited,0);
    
    for(let i=0;i<visited.length;i++){
        if(!visited[i]){
            return false;
        }
    }
    
    return true;
};