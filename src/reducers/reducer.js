/**
 * The reducer is a pure function that takes 
 * the previous state and an action, and returns the next state. 
 * It's called a reducer because it's the 
 * type of function you would pass to Array. 
 */

const initialState = {
    login: localStorage.getItem('login') ?? false,
    token: localStorage.getItem('token') ?? null 
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                login: action.value,
                token: action.token
            }
        case 'LOGOUT':
            return {
                ...state,
                login: action.value
            }   
      default:
        return state
    }
}
  
export default reducer;