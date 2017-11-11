import { ErrorHandle } from '../../constants/actionTypes';
import { ErrorWhenMovieSearch, OffErrorWhenMovieSearch } from '../ErrorHandle';
test('handling error when searching movie', () =>{
    const mockError = 'The movie is Not Found';
    const mockAction = ErrorWhenMovieSearch(mockError);
    const expected = {
        type: ErrorHandle.ERROR_WHEN_SEARCHING_MOVIE,
        payload: {
            error: mockError
        }
    };
    expect(mockAction).toEqual(expected);
});
test('when need to off error in movielist', () => {
    const mockAction = OffErrorWhenMovieSearch();
    const expected = {
        type: ErrorHandle.OFF_ERROR_WHEN_SEARCHING_MOVIE
    };
    expect(mockAction).toEqual(expected);
})