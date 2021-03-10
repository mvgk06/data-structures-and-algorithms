/*

BFS

Time - O(n^2)
Space - O(n^2)

*/

const isValid=(matrix,i,j,visited)=>{
    return i>=0 && i<matrix.length && j>=0 && j<matrix[i].length && !visited[i][j] && matrix[i][j]!=0;
}

const bfs=(matrix,visited)=>{
    
    const queue=new Deque();
    
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]===0){
                visited[i][j]=true;
                queue.push([i,j]);
            }
        }
    }
    
    while(queue.getSize()>0){
        const [row,col]=queue.getFront();
        queue.deque();
        
        if(isValid(matrix,row+1,col,visited)){
            visited[row+1][col]=true;
            queue.push([row+1,col]);
            matrix[row+1][col]=matrix[row][col]+1;
        }
        
        if(isValid(matrix,row,col+1,visited)){
            visited[row][col+1]=true;
            queue.push([row,col+1]);
            matrix[row][col+1]=matrix[row][col]+1;
        }
        
        if(isValid(matrix,row-1,col,visited)){
            visited[row-1][col]=true;
            queue.push([row-1,col]);
            matrix[row-1][col]=matrix[row][col]+1;
        }
        
        if(isValid(matrix,row,col-1,visited)){
            visited[row][col-1]=true;
            queue.push([row,col-1]);
            matrix[row][col-1]=matrix[row][col]+1;
        }
    }
    
    
}

const updateMatrix = function(matrix) {

    const visited=new Array(matrix.length);
    
    for(let i=0;i<matrix.length;i++){
        visited[i]=new Array(matrix[i].length);
        visited[i].fill(false);
    }
    
    
    bfs(matrix,visited);
    
    return matrix;

};