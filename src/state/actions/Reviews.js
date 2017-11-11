import { Channel, Reviews } from '../constants/actionTypes';
export const AttachListner = (id) => (
    {
        type: Channel.ATTACH_REVIEWS_LISTENER,
        payload: {
            id
        }
    }
);
export const DetachListener = () => (
    {
        type: Channel.DETACH_REVIEWS_LISTENER
    }
)
export const InitialReviews = (reviews,id) => (
    {
        type: Reviews.INITIAL_LOAD,
        payload: {
            reviews,
            id
        }
    }
)
export const AddMovieReview = (review,id) => {
    console.log('added');
    return {
        type: Reviews.REVIEW_ADDED,
        payload: {
            review,
            id
        }
    }
}
export const UpdateMovieReview = (review,id) => (
    {
        type: Reviews.REVIEW_UPDATED,
        payload: {
            review,
            id
        }
    }
);
export const RemoveMovieReview = (review,id) => (
    {
        type: Reviews.REVIEW_DELETED,
        payload: {
            review,
            id,
        }
    }
);