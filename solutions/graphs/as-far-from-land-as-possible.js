/*

BFS

Time - O(n^2)
Space - O(n^2)

*/

const Deque=require("../../data-structures/deque.js");

const isValid=(grid,visited,row,col)=>{
    return row>=0 && row<grid.length && col>=0 && col<grid[row].length && !visited[row][col];
}

const bfs=(grid,visited,result)=>{
    
    const queue=new Deque();
    
    for(let i=0;i<visited.length;i++){
        for(let j=0;j<visited[i].length;j++){
            if(grid[i][j]===1 && !visited[i][j]){
                visited[i][j]=true;
                queue.push([i,j]);
                result[i][j]=0;
            }
        }
    }
    
    while(queue.getSize()>0){
        const [row,col]=queue.getFront();
        queue.deque();
        
        if(isValid(grid,visited,row+1,col)){
            visited[row+1][col]=true;
            queue.push([row+1,col]);
            result[row+1][col]=result[row][col]+1;
        }
        
        if(isValid(grid,visited,row,col+1)){
            visited[row][col+1]=true;
            queue.push([row,col+1]);
            result[row][col+1]=result[row][col]+1;
        }
        
        if(isValid(grid,visited,row-1,col)){
            visited[row-1][col]=true;
            queue.push([row-1,col]);
            result[row-1][col]=result[row][col]+1;
        }
        
        if(isValid(grid,visited,row,col-1)){
            visited[row][col-1]=true;
            queue.push([row,col-1]);
            result[row][col-1]=result[row][col]+1;
        }
    }
    
    
}

const maxDistance = function(grid) {
    
    const visited=new Array(grid.length), result=new Array(grid.length);
    
    for(let i=0;i<visited.length;i++){
        visited[i]=new Array(grid[i].length);
        visited[i].fill(false);
        result[i]=new Array(grid[i].length);
        result[i].fill(0);
    }
    
    bfs(grid,visited,result);
    
    let resultDistance=0;
    for(let i=0;i<result.length;i++){
        for(let j=0;j<result[i].length;j++){
            resultDistance=Math.max(resultDistance,result[i][j]);
        }
    }
    
    if(resultDistance===0){
        return -1;
    }
    
    return resultDistance;
    
};