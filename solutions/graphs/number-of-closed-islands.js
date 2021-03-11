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
