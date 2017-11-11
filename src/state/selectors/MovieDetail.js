import { createSelector } from 'reselect';
const getUid = (state) => {
    if(!state.auth.user) {
        return null;
    }
    return state.auth.user.uid;
}
const getMovieDetail = (state, id ) => {
    if(!state.movieDetail.Movies[id]) {
        return null;
    }
    return state.movieDetail.Movies[id];
}
const getMovieReviews = (state, id) => {
    if(!state.movieDetail.Reviews[id]) {
        return null;
    }
    return state.movieDetail.Reviews[id];
}
export const giveMovieDetail = () => createSelector(
    [getMovieDetail],
    movieDetail => movieDetail
);
export const giveMovieReviews = ()  => createSelector(
    [getMovieReviews, getUid],
    (movieReviews, userUid) =>  {
        const userReviewIndex = movieReviews ? movieReviews.findIndex((review) => review.uid === userUid) : -1;
        const userReviewId = userReviewIndex > -1 ? movieReviews[userReviewIndex].reviewId : null;
        return {
            movieReviews,
            userReviewId
        }
    }
);
export const giveUid = () => createSelector(
    [getUid],
    uid => uid
)