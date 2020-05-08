const initState={
    todos:[{id:'1',title:'hiii'}]
}

const todoReducer=(state=initState,action)=>{
    if ('ADDTODO' === action.type){
        console.log('DATA SAVED',action);
        return state;
    }
    else if(action.type === 'ADDTODO_ERROR')
    {
        console.log('DATA SAVING error  ',action.err);
        return state;
    }
    else if(action.type === 'DELETE_TODO')
    {
        console.log('DATA DELETED is ',action.todo);
        return state;
    }
    else if(action.type === 'DELETE_ERROR')
    {
        console.log('DELETE ERROR is ',action.err);
        return state;
    }

    return state;
}

export default todoReducer;