/*

DFS

Time - O(n+e)
Space - O(n+e)

*/

const dfs=(graph,visited,active,curr)=>{
    
    visited[curr]=true;
    active[curr]=true;
    
    for(let i=0;i<graph[curr].length;i++){
        const adjacent=graph[curr][i];
        if(!visited[adjacent]){
            if(dfs(graph,visited,active,adjacent)){
                return true;
            }
        }
        else if(active[adjacent]){
            return true;
        }
    }
    
    active[curr]=false;
    return false;
}

const canFinish = function(numCourses, prerequisites) {
    
    const graph=new Array(numCourses);
    
    for(let i=0;i<graph.length;i++){
        graph[i]=[];
    }
    
    for(let i=0;i<prerequisites.length;i++){
        graph[prerequisites[i][1]].push(prerequisites[i][0]);
    }
    
    const visited=new Array(graph.length);
    visited.fill(false);
   
    const active=new Array(graph.length);
    active.fill(false);
    
    for(let i=0;i<visited.length;i++){
        if(!visited[i]){
            if(dfs(graph,visited,active,i)){
                return false;
            }
        }
    }
    
    return true;
    
};

/*

BFS

Time - O(n+e)
Space - O(n+e)

*/

const Deque=require("../../data-structures/deque.js");

const bfs=(graph,indegree)=>{
    
    const queue=new Deque();
    let visited=0;
    
    for(let i=0;i<indegree.length;i++){
        if(indegree[i]===0){
            visited++;
            queue.push(i);
        }
    }
    
    while(queue.getSize()>0){
        const curr=queue.getFront();
        queue.deque();
        
        for(let i=0;i<graph[curr].length;i++){
            const adjacent=graph[curr][i];
            indegree[adjacent]--;
            if(indegree[adjacent]===0){
                visited++;
                queue.push(adjacent);
            }
        }
    }
    
    return visited!=graph.length;
    
}

const canFinish2 = function(numCourses, prerequisites) {
    
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
    
    return !bfs(graph,indegree); 
};