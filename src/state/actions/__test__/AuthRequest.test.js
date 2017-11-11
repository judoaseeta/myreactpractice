import { Auth } from '../../constants/actionTypes';
import {AuthRequest} from '../AuthRequest';
const mockEmail = 'judo@gmail.com';
const mockPassword = '34234ffewr';
test("AuthRequest with 'signin'", () => {
    const signInRequest = AuthRequest('signin',mockEmail, mockPassword);
    const expected = {
        type: Auth.AUTH_REQUEST_SIGNIN,
        payload: {
            email: mockEmail,
            password: mockPassword
        }
    }
    expect(signInRequest).toEqual(expected);
});
test("AuthRequest with 'signup'", () => {
    const signInRequest = AuthRequest('signup',mockEmail, mockPassword);
    const expected = {
        type: Auth.AUTH_REQUEST_SIGNUP,
        payload: {
            email: mockEmail,
            password: mockPassword
        }
    }
    expect(signInRequest).toEqual(expected);
});