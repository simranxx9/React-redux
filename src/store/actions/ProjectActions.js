export const ProjectActions=(project)=>{
    return(dispatch,getState,{ getFirebase, getFirestore })=>{          //using halts mechanism
        
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName:'net',
            authorLastName:'ninja',
            authorId:21322,
            createdAt:new Date()
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT',project});
        }).catch((err)=>{                  //if we get any error or project not added
            dispatch({type:'CREATE_PROJECT_ERROR',err});
        })
        
    }
};
export default ProjectActions;