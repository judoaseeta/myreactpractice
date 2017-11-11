import {SetMovieList} from '../../actions/MovieList';
import {} from '../../actions/Modal';
import MovieList from '../MovieList';
import mockResult from '../../../testing/mockSearchResult';
import mockResult2 from '../../../testing/mockSearchResult2';
import mockMovies from '../../../testing/mockMovies';
import mockMovies2 from '../../../testing/mockMovies2';
test("testing initial movielist fetch(page1)", () => {
    // given
    const initialState = {
        isSearching: false,
        List: {
        }
    }
    const expected = {
        isSearching: false,
        List: {
            king: {
                totalNum: 2664,
                movies: mockMovies
            }
        }
    }
    // when
    const reducer = MovieList(initialState, SetMovieList(mockResult, 'king', 1));
    // then
    expect(reducer).toEqual(expected);
});
test("testing additional movielist fetch(page > 1)", () => {
    const initialState = {
        isSearching: false,
        List: {
            king: {
                totalNum: 2664,
                movies: mockMovies
            }
        }
    }
    const expectedMovies = mockMovies.concat(mockMovies2);
    const expected = {
        isSearching: false,
        List: {
            king: {
                totalNum: 2664,
                movies: expectedMovies
            }
        }
    }
    const reducer = MovieList(initialState, SetMovieList(mockResult2, 'king', 2));
    expect(reducer).toEqual(expected);
});