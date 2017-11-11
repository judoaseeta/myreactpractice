import { AuthSync, SignOut } from '../actions/AuthRequest';
import { toastOn } from '../actions/Toast'
import { Auth } from '../constants/actionTypes';
import { push } from 'react-router-redux';
import { call, take, takeEvery, put} from 'redux-saga/effects'
import { eventChannel } from 'redux-saga';
import { fb } from '../../fb';
import {signInWithEmail, signUpWithEmail, signOut} from '../../utils/authentication';
// syncUserSaga is a eventChannel which dispatches action 
// when authState is changed.
export function AuthChannel() {
    const channel = eventChannel(emit => {
        const unsubscribe = fb.auth().onAuthStateChanged((user, err) => {
            if(user) {
                emit({user});
            } else if(err) {
                emit({user: null, err: err});
            }
            emit({user: null, err: null});
        })
        return unsubscribe;
    });
    return channel;
}

export function* syncUserSaga () {
    const channel = yield call(AuthChannel);
    while(true) {
        const { user, err } = yield take(channel);
        // if error, sending toast.
        if(err){
            yield put(toastOn('error on authentication', err));
        }
        if(user) {
            yield put(AuthSync(user));
            yield put(toastOn(`${user.email} is authenticated`));
        }
    }
    
}
export function* signInSaga(action) {
    const { email, password } = action.payload;
    try {
        yield call(signInWithEmail , email, password);
        yield put(push('/'));
    }
    catch(e) {
        yield put(toastOn('when trying to signIn...',e.message));
    }
  }
export function* signUpSaga(action) {
    const { email, password } = action.payload;
    try {
        yield call(signUpWithEmail, email, password);
        yield put(push('/'));
    }
    catch(e) {
        yield put(toastOn('when trying to signUp',e.message));
    }
  }
export function* signOutSaga() {
    try {
        yield call(signOut);
        yield put(SignOut());
        yield put(push('/'));
    }
    catch(e) {
        yield put(toastOn('when trying to signOut..',e.message));
    }
}
export function* WatchSignUp() {
    yield takeEvery(Auth.AUTH_REQUEST_SIGNUP, signUpSaga);
}
export function* WatchSignIn() {
    yield takeEvery(Auth.AUTH_REQUEST_SIGNIN, signInSaga);
}
export function* WatchSignOut() {
    yield takeEvery(Auth.AUTH_REQUEST_SIGNOUT, signOutSaga);
}