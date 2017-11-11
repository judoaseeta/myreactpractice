import { giveTotalNum, giveMovies } from '../MovieList';
import mockMovies from '../../../testing/mockMovies';
const mockReducer = {
    movieList: {
    isSearching: false,
    List: {
        king: {
            currentPage: 1,
            totalNum: 260,
            movies: mockMovies
        }
    }
}}
test('it should return MovieList by title', () => {
    const movies = giveMovies();
    const expected = mockMovies;
    expect(movies(mockReducer, 'king')).toEqual(expected);
});
test('it should return totalNum', () => {
    const totalNum = giveTotalNum();
    expect(totalNum(mockReducer, 'king')).toEqual(260);
})