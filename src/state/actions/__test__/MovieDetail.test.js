import { MovieDetail } from '../../constants/actionTypes';
import { SetMovieDetail } from '../MovieDetail';
test('testing SetMovieDetail', () => {
    const mockMovie = {
        title: 'Return of the King',
        Year: 2003,
        type: 'movie',
        rating: 10
    }
    const mockAction = SetMovieDetail(mockMovie);
    const expected = {
        type: MovieDetail.SET_MOVIE_DETAIL,
        payload: {
            movie: mockMovie
        }
    }
    expect(mockAction).toEqual(expected);
});