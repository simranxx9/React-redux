// import firebase from '../../config/fbconfig';

const login = (creds)=>{

    return(dispatch,getState,{getFirebase,getFirestore})=>{
        console.log('in the action',creds);
        const firebase = getFirebase();  //getFirebase is to comminicate with project in firebase

        firebase.auth().signInWithEmailAndPassword(
            creds.email,
            creds.password
        ).then(()=>{
            dispatch({type:'LOGIN_SUCCESS'})
        }).catch(err=>{
            dispatch({type:'LOGIN_ERROR',err})
        })
    }
}

export default login;