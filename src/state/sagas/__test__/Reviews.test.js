import { testSaga } from 'redux-saga-test-plan';
import { eventChannel } from 'redux-saga';
import { ReviewsSaga } from '../Reviews';
import { ReviewsChannel } from '../dataChannel';
import { AddMovieReview, InitialReviews, RemoveMovieReview, UpdateMovieReview} from '../../actions/Reviews';
import { toastOn } from '../../actions/Toast';
import { Channel } from '../../constants/actionTypes';
import mockReviews from '../../../components/__test__/mockMovieReviews';
import { take } from 'redux-saga/effects';
test('testing ReviewsSaga when got error', () => {
    const mockunsub = jest.fn()
    const mockchannel = eventChannel(() => mockunsub);
    const mockId = 'fwef';
    const mockResult = {res: null, e:'i am error'}
    const saga = testSaga(ReviewsSaga, mockId);
    saga.next()
        .call(ReviewsChannel, mockId)
        .next(mockchannel)
        .take(mockchannel)
        .next(mockResult)
        .put(toastOn('receiving Reviews...', mockResult.e))
        //.take(mockchannel)  

});
test('should call InitialReviews with reviews when got initial values', () => {
    const mockunsub = jest.fn()
    const mockchannel = eventChannel(() => mockunsub);
    const mockId = 'fwef'
    const mockResult = { res: {type: 'initial', reviews: mockReviews}};
    const saga = testSaga(ReviewsSaga, mockId);
    saga.next()
        .call(ReviewsChannel, mockId)
        .next(mockchannel)
        .take(mockchannel)
        .next(mockResult)
        .put(InitialReviews(mockResult.res.reviews, mockId))
});
test('should call InitialReviews with [] when initial values is null', () => {
    const mockunsub = jest.fn()
    const mockchannel = eventChannel(() => mockunsub);
    const mockId = 'fwef';
    const mockResult = {res: null};
    const saga = testSaga(ReviewsSaga, mockId);
    saga.next()
        .call(ReviewsChannel, mockId)
        .next(mockchannel)
        .take(mockchannel)
        .next(mockResult)
        .put(InitialReviews([], mockId))
});
test('should call AddMovieReview with review when got added value', () => {
    const mockunsub = jest.fn()
    const mockchannel = eventChannel(() => mockunsub);
    const mockId = 'fwef';
    const mockResult = { res: {type: 'added', review: mockReviews[0]}};
    const saga = testSaga(ReviewsSaga, mockId);
    saga.next()
        .call(ReviewsChannel,mockId)
        .next(mockchannel)
        .take(mockchannel)
        .next(mockResult)
        .put(AddMovieReview(mockResult.res.review, mockId))
});
test('should call RemoveMovieReview with review when got removed', () => {
    const mockunsub = jest.fn()
    const mockchannel = eventChannel(() => mockunsub);
    const mockId = 'fwef';
    const mockResult = { res: {type: 'removed', review: mockReviews[2]}};
    const saga = testSaga(ReviewsSaga, mockId);
    saga.next()
        .call(ReviewsChannel, mockId)
        .next(mockchannel)
        .take(mockchannel)
        .next(mockResult)
        .put(RemoveMovieReview(mockResult.res.review, mockId))
});
test('should call UpdateMovieReview with review when got modified value', () => {
    const mockunsub = jest.fn()
    const mockchannel = eventChannel(() => mockunsub);
    const mockId = 'fwef';
    const mockResult = { res: {type: 'modified', review: mockReviews[1]}};
    const saga = testSaga(ReviewsSaga, mockId);
    saga.next()
        .call(ReviewsChannel, mockId)
        .next(mockchannel)
        .take(mockchannel)
        .next(mockResult)
        .put(UpdateMovieReview(mockResult.res.review, mockId))
});