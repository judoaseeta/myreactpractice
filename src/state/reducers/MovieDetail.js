import {Modal, MovieDetail} from '../constants/actionTypes';
import { Reviews } from '../constants/actionTypes';
const initialState = {
    isQuerying: false,
    isReviewUpdating: false,
    Movies: {},
    Reviews: {}
}
const MovieDetailReducer = (state = initialState, action) => {
    switch(action.type) {
        case MovieDetail.SET_MOVIE_DETAIL :
            return {
                ...state,
                Movies: {
                    ...state.Movies,
                    [action.payload.movie.imdbID] : action.payload.movie
                }
            }
        case Reviews.INITIAL_LOAD :
            return {
                ...state,
                Reviews: {
                    ...state.Reviews,
                    [action.payload.id]: action.payload.reviews
                }
            }
        case Reviews.REVIEW_ADDED: 
            if (state.Reviews[action.payload.id]) {
                return {
                    ...state,
                    Reviews: {
                        ...state.Reviews,
                        [action.payload.id]: [...state.Reviews[action.payload.id], action.payload.review]
                    }
                }
            }
            return {
                ...state,
                Reviews: {
                    ...state.Reviews,
                    [action.payload.id]: [action.payload.review]
                }
            }
        case Reviews.REVIEW_DELETED:
            const indexOfDeleted = 
                state.Reviews[action.payload.id].findIndex(review => review.reviewId === action.payload.review.reviewId);
            const removedReviews = 
            [
                ...state.Reviews[action.payload.id].slice(0, indexOfDeleted),
                ...state.Reviews[action.payload.id].slice(indexOfDeleted + 1,state.Reviews[action.payload.id].length )
            ]
                return {
                    ...state,
                    Reviews: {
                        ...state.Reviews,
                        [action.payload.id]: removedReviews
                    }
                }
        case Reviews.REVIEW_UPDATED:
            const indexOfUpdated = 
                state.Reviews[action.payload.id].findIndex(review => review.reviewId === action.payload.review.reviewId);
            const updatedReviews = 
            [
                ...state.Reviews[action.payload.id].slice(0, indexOfUpdated),
                action.payload.review,
                ...state.Reviews[action.payload.id].slice(indexOfUpdated + 1 , state.Reviews[action.payload.id].length )
            ]
                return {
                    ...state,
                    Reviews: {
                        ...state.Reviews,
                        [action.payload.id]: updatedReviews
                    }
                }
        case Modal.IS_QUERYING:
                return {
                    ...state,
                    isQuerying: true
                }
        case Modal.IS_NOT_QUERYING:
                return {
                    ...state,
                    isQuerying: false
                }
        default: return state;
    }
}
export default MovieDetailReducer;