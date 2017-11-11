import { Auth } from '../constants/actionTypes';
export const AuthRequest = (type, email, password) =>{
    return type === 'signin'
        ? {
            type: Auth.AUTH_REQUEST_SIGNIN,
            payload: {
                email,
                password
            }
        }
        : {
            type: Auth.AUTH_REQUEST_SIGNUP,
            payload: {
                email,
                password
            }
        }
}
export const AuthSync =  (user) => (
    { 
        type: Auth.SYNC_USER,
        payload: {
            user
        }
    }
);
export const InitAuthSync = () =>(
    {
        type: Auth.INITIAL_AUTH
    }
);
export const RequestSignOut = () => (
    {
        type: Auth.AUTH_REQUEST_SIGNOUT
    }
)
export const SignOut = () => (
    {
        type: Auth.SIGN_OUT
    }
)