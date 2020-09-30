/**
 * Actions are payloads of information that 
 * send data from your application to your store. 
 * They are the only source of information for the store. 
 * You send them to the store using store.dispatch()
 */

export const login = {
    type: 'LOGIN'
};

export const logout = {
    type: 'LOGOUT'
};