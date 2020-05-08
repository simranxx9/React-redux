  const initState={
    autError:null
  }

const authReducer=(state=initState,action)=>{
    switch(action.type)
    {
        case 'LOGIN_SUCCESS':
            console.log('successfully logged in');
                            return {
                                ...state,
                                authError:null}

        case 'LOGIN_ERROR':console.log('Login failed',action.err);
                            return {
                                ...state,
                                authError:null}
                                
        case 'SIGNUP_SUCCESS':
                console.log('successfully signed up');
                return {
                    ...state,
                    authError:null}
                        
        case 'SIGNUP_ERROR':console.log('Signup failed',action.err);
        return {
            ...state,
            authError:action.err.message}

        default:
          return state;
            
    }
}

export default authReducer;