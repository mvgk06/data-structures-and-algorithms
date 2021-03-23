/*

BFS

Time - O(n*m)
Space - O(n*m)

*/

const Deque=require("../../data-structures/deque.js");

const isValid=(grid,visited,row,col)=>{
    return row>=0 && row<grid.length && col>=0 && col<grid[row].length && !visited[row][col] && grid[row][col]===1;
}

const bfs=(grid,visited,i,j)=>{
    
    const queue=new Deque();
    
    for(let i=0;i<visited.length;i++){
        for(let j=0;j<visited[i].length;j++){
            if(!visited[i][j] && grid[i][j]===2){
                visited[i][j]=true;
                queue.push([i,j]);
            }
        }
    }
    
    let result=0;
    while(queue.getSize()>0){
        const currSize=queue.getSize();
        result++;
        for(let i=0;i<currSize;i++){
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
    
    return result;
    
}

const orangesRotting = function(grid) {
    
    const visited=new Array(grid.length);
    
    for(let i=0;i<visited.length;i++){
        visited[i]=new Array(grid[i].length);
        visited[i].fill(false);
    }
    
    const result=bfs(grid,visited);
    
    for(let i=0;i<visited.length;i++){
        for(let j=0;j<visited[i].length;j++){
            if(!visited[i][j] && grid[i][j]===1){
                return -1;
            }
        }
    }
    
    if(result===0){
        return result;
    }
    
    return result-1;
    
};