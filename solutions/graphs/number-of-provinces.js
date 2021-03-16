/*

DFS

Time - O(n^2)
Space - O(n)

*/

const dfs=(grid,visited,i)=>{  
    visited[i]=true;
    for(let j=0;j<grid[i].length;j++){
        if(grid[i][j]===1 && !visited[j]){
            dfs(grid,visited,j);
        }
    }
}

const findCircleNum = function(isConnected) {
    
    const visited=new Array(isConnected.length);
    visited.fill(false);
    
    let result=0;
    for(let i=0;i<visited.length;i++){
        if(!visited[i]){
            dfs(isConnected,visited,i);
            result++;
        }
    }
    
    return result;
    
};

/*

BFS

Time - O(n^2)
Space - O(n)

*/

const Deque=require("../../data-structures/deque.js");

const bfs=(grid,visited,i)=>{
    
    const queue=new Deque();
    visited[i]=true;
    queue.push(i);
    
    while(queue.getSize()>0){
        const curr=queue.getFront();
        queue.deque();
        
        for(let j=0;j<grid[curr].length;j++){
            if(grid[curr][j]===1 && !visited[j]){
                visited[j]=true;
                queue.push(j);
            }
        }
    }

}

const findCircleNum2 = function(isConnected) {
    
    const visited=new Array(isConnected.length);
    visited.fill(false);
    
    let result=0;
    for(let i=0;i<visited.length;i++){
        if(!visited[i]){
            bfs(isConnected,visited,i);
            result++;
        }
    }
    
    return result;
    
};