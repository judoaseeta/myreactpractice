import { Movie } from '../../constants/actionTypes';
import { MovieById, MoviesByTitle } from '../ApiRequest';
const mockTitle = 'lord';
const mockId = 'FB2332';
test('when searching movie by title with no page arg', () => {
    const query = MoviesByTitle(mockTitle);
    const expected = {
        type: Movie.REQUEST_MOVIE_BY_TITLE,
        payload: {
            title: mockTitle,
            page: 1
        }
    };
    expect(query).toEqual(expected);
});
test('when searching movie by title with page arg', () => {
    const query = MoviesByTitle(mockTitle, 15);
    const expected = {
        type: Movie.REQUEST_MOVIE_BY_TITLE,
        payload: {
            title: mockTitle,
            page: 15
        }
    };
    expect(query).toEqual(expected);
});
test('when searching movie by id...', () => {
    const query = MovieById(mockId);
    const expected = {
        type: Movie.REQUEST_MOVIE_BY_ID,
        payload: {
            id: mockId
        }
    };
    expect(query).toEqual(expected);
})