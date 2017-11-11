import { MovieList } from '../constants/actionTypes';
export const SetMovieList = (movies, title, page) => (
    {
        type: MovieList.SET_MOVIE_LIST,
        payload: {
            movies,
            title,
            page
        }
    }
);