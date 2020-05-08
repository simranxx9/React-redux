

const deleteTodo = (id)=>{
    return(dispatch,getState,{getFirestore})=>{

        console.log(id);
    //     const firestore = getFirestore();
    //     firestore.collection('todos').doc(id).delete().then(todo=>{
    //         dispatch({type:'DELETE_TODO',todo});
    //     }).catch(err=>{
    //         dispatch({type:'DELETE_ERROR',err});
    //     })
    }
}

export default deleteTodo;