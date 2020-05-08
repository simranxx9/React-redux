
const addTodo =(todo)=>{

    return(dispatch,getState,{getFirebase,getFirestore})=>{

        const firestore = getFirestore();
        console.log(firestore);
        firestore.collection('todos').add({
            ...todo,
            name:todo.name,
            city:'Bardoli',
            standard:todo.standard,
            createdAt:new Date()
        }).then(()=>{
            dispatch({type:'ADDTODO',todo});
        }).catch(err=>{
            dispatch({type:'ADDTODO_ERROR',err});
        })
   }

}

export default addTodo;