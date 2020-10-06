/**
 * The reducer is a pure function that takes 
 * the previous state and an action, and returns the next state. 
 * It's called a reducer because it's the 
 * type of function you would pass to Array. 
 */

const initialState = {
    login: localStorage.getItem('login') ?? false,
    token: localStorage.getItem('token') ?? null,
    user: localStorage.getItem('user') ?? null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                login: action.value,
                token: action.token,
                user: action.user
            }
        case 'LOGOUT':
            return {
                ...state,
                login: action.value,
                token: action.token,
                user: action.user
            }
      default:
        return state
    }
}
  
export default reducer;