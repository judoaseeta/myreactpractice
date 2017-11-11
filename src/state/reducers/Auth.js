import { Auth } from '../constants/actionTypes';
const initialState = {
    isSignedIn: false,
    user: null
}
const AuthReducer =(state = initialState, action) => {
    switch(action.type) {
        case Auth.SYNC_USER: 
            return {
                isSignedIn: true,
                user: action.payload.user
            }
        case Auth.SIGN_OUT:
            return {
                isSignedIn: false,
                user: null
            }
        default: return state
    }
}
export default AuthReducer;