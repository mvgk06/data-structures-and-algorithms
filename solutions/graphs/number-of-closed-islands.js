/*

DFS

Time - O(n^2)
Space - O(n^2)

*/

const dfs=(grid,visited,i,j)=>{
    if(i<0 || i>=grid.length || j<0 || j>=grid[i].length || visited[i][j] || grid[i][j]===1){
        return;
    }
    visited[i][j]=true;
    dfs(grid,visited,i+1,j);
    dfs(grid,visited,i,j+1);
    dfs(grid,visited,i-1,j);
    dfs(grid,visited,i,j-1);
}

const closedIsland = function(grid) {

    const visited=new Array(grid.length);
    
    for(let i=0;i<grid.length;i++){
        visited[i]=new Array(grid[i].length);
        visited[i].fill(false);
    }
    
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(i===0 || i===grid.length-1 || j===0 || j===grid[i].length-1 && grid[i][j]===0 && !visited[i][j]){
                dfs(grid,visited,i,j);      
            }
        }
    }
    
    let result=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]===0 && !visited[i][j]){
                dfs(grid,visited,i,j);
                result++;
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
    return i>=0 && i<grid.length && j>=0 && j<grid[i].length && !visited[i][j] && grid[i][j]===0;
}

const bfs=(grid,visited,i,j)=>{
    
    const queue=new Deque();
    visited[i][j]=true;
    queue.push([i,j]);
    
    while(queue.getSize()>0){
        
        const [row,col]=queue.getFront();
        queue.deque();
        
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

}

const closedIsland2 = function(grid) {

    const visited=new Array(grid.length);
    
    for(let i=0;i<grid.length;i++){
        visited[i]=new Array(grid[i].length);
        visited[i].fill(false);
    }
    
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if((i===0 || i===grid.length-1 || j===0 || j===grid[i].length-1) && grid[i][j]===0 && !visited[i][j]){
                bfs(grid,visited,i,j);      
            }
        }
    }

    
    let result=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]===0 && !visited[i][j]){
                bfs(grid,visited,i,j);
                result++;
            }
        }
    }
    
    return result;
    
};