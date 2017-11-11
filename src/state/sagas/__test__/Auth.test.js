import { testSaga } from 'redux-saga-test-plan';
import { eventChannel } from 'redux-saga';
import { push } from 'react-router-redux';
import { AuthChannel, syncUserSaga , signInSaga} from '../Auth';
import { Auth } from '../../constants/actionTypes';
import { AuthSync, } from '../../actions/AuthRequest';
import { toastOn } from '../../actions/Toast';
import { signInWithEmail } from '../../../utils/authentication';
test('syncUserSaga when authentication is failed(error)', () => {
    const mockunsub = jest.fn()
    const mockchannel = eventChannel(() => mockunsub);
    const saga = testSaga(syncUserSaga);
    saga.next()
        .call(AuthChannel)
        .next(mockchannel)
        .take(mockchannel)
        .next({err: 'i am error'})
        .put(toastOn('error on authentication', 'i am error'))
});
test('syncUserSaga when authentication is success', () => {
    const mockunsub = jest.fn()
    const mockchannel = eventChannel(() => mockunsub);
    const mockResult = { user: {email: 'judo@gmail.com'}}
    const saga = testSaga(syncUserSaga);
    saga.next()
        .call(AuthChannel)
        .next(mockchannel)
        .take(mockchannel)
        .next(mockResult)
        .put(AuthSync(mockResult.user))
        .next()
        .put(toastOn(`${mockResult.user.email} is authenticated`))
});
test('syncUserSaga when authentication is null(signed out)', () => {
    const mockunsub = jest.fn()
    const mockchannel = eventChannel(() => mockunsub);
    const mockUser = {user: null}
    const saga = testSaga(syncUserSaga);
    saga.next()
        .call(AuthChannel)
        .next(mockchannel)
        .take(mockchannel)
        .next(mockUser)
});
test('signInWithEmail', () => {
    const mockInfo = { email: 'roy@gmail.com', password: '133dff'}
    const mockAction = { payload: mockInfo}
    const saga = testSaga(signInSaga, mockAction);
    saga.next()
        .call(signInWithEmail,mockInfo.email, mockInfo.password)
        .next(mockInfo)
        .put(push('/'))
});
test('signInWithEmail when errors', () => {
    const mockInfo = { email: 'roy@gmail.com', password: '133dff'}
    const mockAction = { payload: mockInfo}
    const saga = testSaga(signInSaga, mockAction)
    saga.next()
        .call(signInWithEmail,mockInfo.email, mockInfo.password)
        .next()
        .throw(new Error('i am error'))
        .put(toastOn(`when trying to signIn...`,'i am error'))
});