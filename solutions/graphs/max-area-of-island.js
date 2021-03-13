/*

DFS

Time - O(n^2)
Space - O(n^2)

*/

const dfs=(grid,visited,i,j)=>{
    if(i<0 || i>=grid.length || j<0 || j>=grid[i].length || visited[i][j] || grid[i][j]===0){
        return 0;
    }
    
    visited[i][j]=true;
    const top=dfs(grid,visited,i+1,j);
    const right=dfs(grid,visited,i,j+1);
    const bottom=dfs(grid,visited,i-1,j);
    const left=dfs(grid,visited,i,j-1);
    
    return 1+top+right+bottom+left;
}

const maxAreaOfIsland = function(grid) {
    
    const visited=new Array(grid.length);
    
    for(let i=0;i<grid.length;i++){
        visited[i]=new Array(grid[i].length);
        visited[i].fill(false);
    }
    
    let result=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(!visited[i][j] && grid[i][j]===1){
                result=Math.max(result,dfs(grid,visited,i,j));
            }
        }
    }
    
    return result;
};

/*

BFS

Time - O(n^2)
Space - O(n^2)

*/

const Deque=require("../../data-structures/deque.js");

const isValid=(grid,visited,i,j)=>{
    return i>=0 && i<grid.length && j>=0 && j<grid[i].length && !visited[i][j] && grid[i][j]===1;
}

const bfs=(grid,visited,i,j)=>{
    
    const queue=new Deque();
    queue.push([i,j]);
    visited[i][j]=true;
    
    let result=0;
    while(queue.getSize()>0){
        const [row,col]=queue.getFront();
        queue.deque();
        
        result++;
        
        if(isValid(grid,visited,row+1,col)){
            visited[row+1][col]=true;
            queue.push([row+1,col]);
        }
        
        if(isValid(grid,visited,row,col+1)){
            visited[row][col+1]=true;
            queue.push([row,col+1]);
        }
        
        if(isValid(grid,visited,row-1,col)){
            visited[row-1][col]=true;
            queue.push([row-1,col]);
        }
        
        if(isValid(grid,visited,row,col-1)){
            visited[row][col-1]=true;
            queue.push([row,col-1]);
        }
    }
    
    return result;
}

const maxAreaOfIsland2 = function(grid) {
    
    const visited=new Array(grid.length);
    
    for(let i=0;i<grid.length;i++){
        visited[i]=new Array(grid[i].length);
        visited[i].fill(false);
    }
    
    let result=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(!visited[i][j] && grid[i][j]===1){
                result=Math.max(result,bfs(grid,visited,i,j));
            }
        }
    }
    
    return result;
};