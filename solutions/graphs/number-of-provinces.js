/*

DFS

Time - O(n^2)
Space - O(n)

*/

const dfs=(grid,visited,i)=>{
    
    for(let j=0;j<grid[i].length;j++){
        if(!visited[j] && grid[i][j]===1){
            visited[j]=true;
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
            visited[i]=true;
            dfs(isConnected,visited,i);
            result++;
        }
    }
    
    return result;
    
};