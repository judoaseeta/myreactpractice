import { Movie, Reviews } from '../constants/actionTypes';
export const MoviesByTitle = (title, page = 1) => (
    {
        type: Movie.REQUEST_MOVIE_BY_TITLE,
        payload: {
            title,
            page
        }
    }
)
export const MovieById = (id) => (
    {
        type: Movie.REQUEST_MOVIE_BY_ID,
        payload: {
            id
        }
    }
)
export const CancelMoviesByTitle = () => (
    {
        type: Movie.CANCEL_REQUEST_MOVIE_BY_TITLE
    }
);
export const CancelMovieById = () => (
    {
        type: Movie.CANCEL_REQUEST_MOVIE_BY_ID
    }
);
export const AddMovieReview = (review, id) => (
    {
        type: Reviews.REVIEW_UPLOAD,
        payload: {
            review,
            id
        }
    }
)
export const UpdateMovieReview = (review, id, reviewId) => (
    {
        type: Reviews.REVIEW_UPDATE,
        payload: {
            review,
            id,
            reviewId
        }
    }
);
export const RemoveMovieReview = (id, reviewId) => (
    {
        type: Reviews.REVIEW_REMOVE,
        payload: {
            id, 
            reviewId
        }
    }
)