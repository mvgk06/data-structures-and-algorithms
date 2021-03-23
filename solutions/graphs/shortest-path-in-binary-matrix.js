/*

BFS

Time - O(n^2)
Space - O(n^2)

*/

const Deque=require("../../data-structures/deque.js");

const isValid=(grid,visited,i,j)=>{
    return i>=0 && i<grid.length && j>=0 && j<grid[i].length && !visited[i][j] && grid[i][j]===0;
}

const bfs=(grid,visited)=>{
    
    const queue=new Deque();
    visited[0][0]=true;
    queue.push([0,0]);
    
    while(queue.getSize()>0){
        const [i,j]=queue.getFront();
        queue.deque();
        
        if(isValid(grid,visited,i+1,j)){
            visited[i+1][j]=true;
            queue.push([i+1,j]);
            grid[i+1][j]=grid[i][j]+1;
        }
        
        if(isValid(grid,visited,i+1,j+1)){
            visited[i+1][j+1]=true;
            queue.push([i+1,j+1]);
            grid[i+1][j+1]=grid[i][j]+1;
        }
        
        if(isValid(grid,visited,i,j+1)){
            visited[i][j+1]=true;
            queue.push([i,j+1]);
            grid[i][j+1]=grid[i][j]+1;
        }
        
        if(isValid(grid,visited,i-1,j+1)){
            visited[i-1][j+1]=true;
            queue.push([i-1,j+1]);
            grid[i-1][j+1]=grid[i][j]+1;
        }
        
        if(isValid(grid,visited,i-1,j)){
            visited[i-1][j]=true;
            queue.push([i-1,j]);
            grid[i-1][j]=grid[i][j]+1;
        }
        
        if(isValid(grid,visited,i-1,j-1)){
            visited[i-1][j-1]=true;
            queue.push([i-1,j-1]);
            grid[i-1][j-1]=grid[i][j]+1;
        }
        
        if(isValid(grid,visited,i,j-1)){
            visited[i][j-1]=true;
            queue.push([i,j-1]);
            grid[i][j-1]=grid[i][j]+1;
        }
        
        if(isValid(grid,visited,i+1,j-1)){
            visited[i+1][j-1]=true;
            queue.push([i+1,j-1]);
            grid[i+1][j-1]=grid[i][j]+1;
        }
        
    }
    
    
}

const shortestPathBinaryMatrix = function(grid) {
    
    if(grid[0][0]!=0){
        return -1;
    }
    
    const visited=new Array(grid.length);
    
    for(let i=0;i<visited.length;i++){
        visited[i]=new Array(grid[i].length);
        visited[i].fill(false);
    }
    
    bfs(grid,visited);
    
    const row=grid.length, col=grid[row-1].length;
    
    if(!visited[row-1][col-1]){
       return -1; 
    }
    
    return grid[row-1][col-1]+1;
    
};