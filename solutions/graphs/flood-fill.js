/*

DFS

Time - O(n^2)
Space - O(n^2)

*/

const dfs=(image,i,j,oldColor,newColor,visited)=>{
    
    if(i<0 || i>=image.length || j<0 || j>=image[i].length || visited[i][j] || image[i][j]!=oldColor){
        return;
    }
    
    visited[i][j]=true;
    image[i][j]=newColor;
    
    dfs(image,i+1,j,oldColor,newColor,visited);
    dfs(image,i,j+1,oldColor,newColor,visited);
    dfs(image,i-1,j,oldColor,newColor,visited);
    dfs(image,i,j-1,oldColor,newColor,visited);
}

const floodFill = function(image, sr, sc, newColor) {
    
    const visited=new Array(image.length);
    
    for(let i=0;i<visited.length;i++){
        visited[i]=new Array(image[i].length);
    }
    
    const oldColor=image[sr][sc];
    
    dfs(image,sr,sc,oldColor,newColor,visited);
    
    return image;
    
};