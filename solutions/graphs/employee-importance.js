/*

DFS

Time - O(n+e)
Space - O(n)

*/

const GetImportance = function(employees, id) {
    
    const visited=new Array(employees.length);
    visited.fill(false);
    
    const empMap=new Map();
    
    for(let i=0;i<employees.length;i++){
        empMap.set(employees[i].id,employees[i]);
    }
    
    let result=0;
    
    const dfs=(curr)=>{

        if(visited[curr]){
            return;
        }

        visited[curr]=true;
        result+=empMap.get(curr).importance;
        
        for(let i=0;i<empMap.get(curr).subordinates.length;i++){
            if(!visited[empMap.get(curr).subordinates[i]]){
                dfs(empMap.get(curr).subordinates[i]);
            }
        }
    }

    dfs(id);
    
    return result;
};