/*

DFS

Time - O(n*m)
Space - O(n*m)

*/

const dfs=(board,visited,i,j)=>{
    if(i<0 || i>=board.length || j<0 || j>=board[i].length || board[i][j]==="X" || visited[i][j]){
        return;
    }
    
    visited[i][j]=true;
    board[i][j]="A";
    
    dfs(board,visited,i+1,j);
    dfs(board,visited,i,j+1);
    dfs(board,visited,i-1,j);
    dfs(board,visited,i,j-1);
}

const solve = function(board) {
    
    const visited=new Array(board.length);
    
    for(let i=0;i<visited.length;i++){
        visited[i]=new Array(board[i].length);
        visited[i].fill(false);
    }
    
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            if(board[i][j]==="O" && (i===0 || i===board.length-1 || j===0 || j===board[i].length-1)){
                dfs(board,visited,i,j);
            }
        }
    }
    
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            if(board[i][j]==="O"){
                board[i][j]="X";
            }
            else if(board[i][j]==="A"){
                board[i][j]="O";
            }
        }
    }
    
};

/*

BFS

Time - O(n*m)
Space - O(n*m)

*/

const isValid=(board,visited,i,j)=>{
    return i>=0 && i<board.length && j>=0 && j<board[i].length && board[i][j]==="O" && !visited[i][j];
}

const bfs=(board,visited,i,j)=>{
    
    const queue=new Deque();
    queue.push([i,j]);
    visited[i][j]=true;
    
    while(queue.getSize()>0){
        const [row,col]=queue.getFront();
        queue.deque();
        
        board[row][col]="A";
        
        if(isValid(board,visited,row+1,col)){
            visited[row+1][col]=true;
            queue.push([row+1,col]);
        }
        
        if(isValid(board,visited,row,col+1)){
            visited[row][col+1]=true;
            queue.push([row,col+1]);
        }
        
        if(isValid(board,visited,row-1,col)){
            visited[row-1][col]=true;
            queue.push([row-1,col]);
        }
        
        if(isValid(board,visited,row,col-1)){
            visited[row][col-1]=true;
            queue.push([row,col-1]);
        }
    }

}

const solve2 = function(board) {
    
    const visited=new Array(board.length);
    
    for(let i=0;i<visited.length;i++){
        visited[i]=new Array(board[i].length);
        visited[i].fill(false);
    }
    
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            if(board[i][j]==="O" && (i===0 || i===board.length-1 || j===0 || j===board[i].length-1)){
                bfs(board,visited,i,j);
            }
        }
    }
    
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            if(board[i][j]==="O"){
                board[i][j]="X";
            }
            else if(board[i][j]==="A"){
                board[i][j]="O";
            }
        }
    }
    
};