import { spawn } from 'redux-saga/effects';
import { syncUserSaga, WatchSignUp, WatchSignIn, WatchSignOut } from './Auth';
import { WatchMovieById, WatchMoviesByTitle } from './Movie';
import { WatchAddReview, WatchDeleteReview, WatchUpdateReview , WatchReviewRequests } from './Reviews';
function* rootSaga() {
    yield [ 
        spawn(syncUserSaga),
        spawn(WatchMovieById),
        spawn(WatchMoviesByTitle),
        spawn(WatchSignUp),
        spawn(WatchSignIn),
        spawn(WatchSignOut),
        spawn(WatchReviewRequests),
        spawn(WatchAddReview),
        spawn(WatchDeleteReview),
        spawn(WatchUpdateReview)
    ]
}
export default rootSaga;