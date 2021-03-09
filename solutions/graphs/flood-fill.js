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

/*

BFS

Time - O(n^2)
Space - O(n^2)

*/

const Deque=require("../../data-structures/deque.js");

const isValid=(image,i,j,visited,oldColor)=>{
    return i>=0 && i<image.length && j>=0 && j<image[i].length && !visited[i][j] && image[i][j]===oldColor;
}

const bfs=(image,i,j,oldColor,newColor,visited)=>{
    
    const queue=new Deque();
    visited[i][j]=true;
    queue.push([i,j]);
    image[i][j]=newColor;
    
    while(queue.getSize()>0){
        const [row,col]=queue.getFront();
        queue.deque();
        image[row][col]=newColor;
        
        if(isValid(image,row+1,col,visited,oldColor)){
            visited[row+1][col]=true;
            queue.push([row+1,col]);
        }
        
        if(isValid(image,row,col+1,visited,oldColor)){
            visited[row][col+1]=true;
            queue.push([row,col+1]);
        }
        
        if(isValid(image,row-1,col,visited,oldColor)){
            visited[row-1][col]=true;
            queue.push([row-1,col]);
        }
        
        if(isValid(image,row,col-1,visited,oldColor)){
            visited[row][col-1]=true;
            queue.push([row,col-1]);
        }
    }

}

const floodFill2 = function(image, sr, sc, newColor) {
    
    const visited=new Array(image.length);
    
    for(let i=0;i<visited.length;i++){
        visited[i]=new Array(image[i].length);
    }
    
    const oldColor=image[sr][sc];
    
    bfs(image,sr,sc,oldColor,newColor,visited);
    
    return image;
    
};