/*

Brute force Dijkstra

Time - O(n^2)
Space - O(n+e)

*/

const getTimeRequired=(graph,visited,src)=>{
    
    const times=new Array(graph.length+1);
    times.fill(Number.MAX_VALUE);
    times[src]=0;
    
    let result=0;
    for(let i=1;i<=(graph.length-1);i++){
        
        let currMinTime=Number.MAX_VALUE, curr=-1;
        
        for(let j=1;j<=(times.length-1);j++){
            if(!visited[j] && times[j]<currMinTime){
                currMinTime=times[j];
                curr=j;
            }
        }
        
        visited[curr]=true;
        result=Math.max(result,currMinTime);
        
        if(curr===-1){
            return -1;
        }
        
        for(let k=0;k<graph[curr].length;k++){
            const [adjacent,adjacentTime]=graph[curr][k];
            if(!visited[adjacent] && times[curr]+adjacentTime<times[adjacent]){
                times[adjacent]=times[curr]+adjacentTime;
            }
        }
        
    }
    
    for(let i=1;i<=(visited.length-1);i++){
        if(!visited[i]){
            return -1;
        }
    }
    
    return result;
    
}

const networkDelayTime = function(times, n, k) {

    const graph=new Array(n+1);
    
    for(let i=1;i<=n;i++){
        graph[i]=[];
    }
    
    for(let i=0;i<times.length;i++){
        graph[times[i][0]].push([times[i][1],times[i][2]]);
    }
    
    const visited=new Array(n+1);
    visited.fill(false);
    
    return getTimeRequired(graph,visited,k);
    
};
