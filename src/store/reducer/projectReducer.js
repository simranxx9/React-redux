const initState={
    projects:[
        {id:1,title:'from east to west'},
        {id:2,title:'from east to west'},
        {id:3,title:'from east to west'}
    ]
}
const projectReducer = (state=initState,action) =>{
    if (action.type === 'CREATE_PROJECT'){
        console.log('created project',action.project);
                           
    }
    if (action.type === 'CREATE_PROJECT_ERROR'){
        console.log('created project error',action.err);
                             
    }
    return state;
}

export default projectReducer;