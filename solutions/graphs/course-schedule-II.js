/*

DFS

Time - O(n+e)
Space - O(n+e)

*/

const dfs=(graph,visited,active,result,curr)=>{
    
    visited[curr]=true;
    active[curr]=true;
        
    for(let i=0;i<graph[curr].length;i++){
        const adjacent=graph[curr][i];
        if(!visited[adjacent]){
            if(dfs(graph,visited,active,result,adjacent)){
                return true;
            }
        }
        else if(active[adjacent]){
            return true;
        }
    }
        
    result.push(curr);
    active[curr]=false;
    return false;
    
}

const findOrder = function(numCourses, prerequisites) {

    const graph=new Array(numCourses);
    
    for(let i=0;i<graph.length;i++){
        graph[i]=[];
    }
    
    for(let i=0;i<prerequisites.length;i++){
        graph[prerequisites[i][1]].push(prerequisites[i][0]);
    }
   
    const result=[], visited=new Array(graph.length), active=new Array(graph.length); 
    visited.fill(false);
    active.fill(false);
    
    for(let i=0;i<visited.length;i++){
        if(!visited[i]){
            if(dfs(graph,visited,active,result,i)){
                return [];
            }
        }
    }
    
    return result.reverse();
    
};

/*

BFS

Time - O(n+e)
Space - O(n+e)

*/

const Deque=require("../../data-structures/deque.js");

const bfs=(graph,indegree,result)=>{
    
    const queue=new Deque();
    
    for(let i=0;i<indegree.length;i++){
        if(indegree[i]===0){
            queue.push(i);
        }
    }
    
    while(queue.getSize()>0){
        const curr=queue.getFront();
        queue.deque();
        
        result.push(curr);
        
        for(let i=0;i<graph[curr].length;i++){
            const adjacent=graph[curr][i];
            indegree[adjacent]--;
            if(indegree[adjacent]===0){
                queue.push(adjacent);
            }
        }
        
    }
    
}

const findOrder2 = function(numCourses, prerequisites) {

    const graph=new Array(numCourses);
    
    for(let i=0;i<graph.length;i++){
        graph[i]=[];
    }
    
    const indegree=new Array(graph.length);
    indegree.fill(0);
    
    for(let i=0;i<prerequisites.length;i++){
        graph[prerequisites[i][1]].push(prerequisites[i][0]);
        indegree[prerequisites[i][0]]++;
    }
   
    const result=[];
    
    bfs(graph,indegree,result);
    
    if(result.length===graph.length){
        return result;
    }
    
    return [];
}