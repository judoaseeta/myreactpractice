import { MovieDetail } from '../constants/actionTypes';
export const SetMovieDetail = (movie) => (
    {
        type: MovieDetail.SET_MOVIE_DETAIL,
        payload:{
            movie
        }
    }
);
