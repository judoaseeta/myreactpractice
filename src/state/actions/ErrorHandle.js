import  { ErrorHandle } from '../constants/actionTypes';
export const ErrorWhenMovieSearch = (error) => (
    {
        type: ErrorHandle.ERROR_WHEN_SEARCHING_MOVIE,
        payload: {
            error
        }
    }
);
export const ErrorWhenMovieDetail = (error) => (
    {
        type: ErrorHandle.ERROR_WHEN_SEARCHING_MOVIE_DETAIL,
        payload: {
            error
        }
    }
)
export const OffErrorWhenMovieSearch = () => (
    {
        type: ErrorHandle.OFF_ERROR_WHEN_SEARCHING_MOVIE
    }
)