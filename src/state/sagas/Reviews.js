import { ReviewsChannel } from './dataChannel';
import { fork ,take, call, cancel, cancelled, put } from 'redux-saga/effects';
import { Channel, Reviews } from '../constants/actionTypes';
import { toastOn } from '../actions/Toast';
import { InitialReviews, AddMovieReview, UpdateMovieReview, RemoveMovieReview} from '../actions/Reviews';
import { addReview, updateReview, deleteReview } from '../../utils/review';
import { LOCATION_CHANGE } from 'react-router-redux';
export function* ReviewsSaga(id) {
    //const { id } = action.payload;
    const channel = yield call(ReviewsChannel, id);
    try{
        while(true) {
            const { res, e } =  yield take(channel);
            if(e) {
                throw new Error(e);
            }
            if(res === null) {
                yield put(InitialReviews([], id));
                break;
            } else if(res) {
                switch(res.type) {
                    case 'initial' : 
                        yield put(InitialReviews(res.reviews, id));
                        break;
                    case 'added' : 
                        yield put(AddMovieReview(res.review, id));
                        break;
                    case 'modified': 
                        yield put(UpdateMovieReview(res.review, id));
                        break;
                    case 'removed': 
                        yield put(RemoveMovieReview(res.review, id));
                        break;
                    default: return;
                }
            }
        }
    } catch(e) {
        yield put(toastOn('receiving Reviews...', e.message));
    } finally {
        if (yield cancelled()) {
            yield channel.close();
        }
    }
}
/*
export function* ReviewsSaga(action) {
    const {id} = action.payload;
    const channel = yield call(ReviewsChannel, id);
    try{
        while(true) {
            let { res, e } = yield take(channel);
            if(e) {
                throw new Error(e);
            }
            if(res === null) {
                yield put(InitialReviews([], id)) 
            }
            switch(res.type) {
                case 'initial' : 
                    yield put(InitialReviews(res.reviews, id));
                    break;
                case 'added' : 
                    yield put(AddMovieReview(res.review, id));
                    break;
                case 'modified': 
                    yield put(UpdateMovieReview(res.review, id));
                    break;
                case 'removed': 
                    yield put(RemoveMovieReview(res.review, id));
                    break;
                default: return;
            }
        }
    } catch(e) {
        yield put(toastOn('receiving Reviews...', e.message));
    } finally {
        if(cancelled()) {
            channel.close();
        }
    }
}
*/
export function* AddReviewSaga(review, id) {
    try {
        yield call(addReview, review, id);
    } catch(e) {
        yield put(toastOn('when uploading review', e.message));
    }
}
export function* UpdateReviewSaga(updater, id, reviewId) {
    try {
        yield call(updateReview, updater, id, reviewId);
    } catch(e) {
        yield put('when updating review', e.message);
    }
}
export function* DeleteReviewSaga(id, reviewId) {
    try {
        yield call(deleteReview, id, reviewId);
    } catch(e) {
        yield put('when deleting review', e.message);
    }
}
export function* WatchReviewRequests() {
    // const channel = yield takeEvery(Channel.ATTACH_REVIEWS_LISTENER, ReviewsSaga);
    while(true) {
        const action = yield take(Channel.ATTACH_REVIEWS_LISTENER);
        const channel = yield fork(ReviewsSaga, action.payload.id);
        const {payload: {pathname}} =  yield take(LOCATION_CHANGE);
        if(!pathname.includes(`${action.payload.id}`)) {
            yield cancel(channel);
        }   
    }
}
export function* WatchAddReview() {
    while(true) {
        const action = yield take(Reviews.REVIEW_UPLOAD);
        const { review, id } = action.payload;
        yield call(AddReviewSaga, review, id);
    }
}
export function* WatchUpdateReview() {
    while(true) {
        const action = yield take(Reviews.REVIEW_UPDATE);
        const { review, id, reviewId } = action.payload;
        yield call(UpdateReviewSaga, review, id, reviewId);
    }
}
export function* WatchDeleteReview() {
    while(true) {
        const action = yield take(Reviews.REVIEW_REMOVE);
        const { id, reviewId } = action.payload;
        yield call(DeleteReviewSaga, id, reviewId);
    }
}