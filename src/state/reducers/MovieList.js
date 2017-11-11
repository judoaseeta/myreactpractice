import { MovieList as Action, Modal } from '../constants/actionTypes';

const initialState = {
    isSearching: false,
    List: {

    }
}
const MovieList = (state = initialState, action) => {
    if(action.type === Action.SET_MOVIE_LIST) {
        const { title, page, movies } = action.payload;
        if(page === 1) {
            return {
                ...state,
                List: {
                    ...state.List,
                    [title] : {
                        totalNum: Number(movies.totalResults),
                        movies: movies.Search
                    }
                }
            }
        }
        return {
            ...state,
            List: {
                ...state.List,
                [title] : {
                    ...state.List[title],
                    movies: state.List[title].movies.concat(movies.Search)
                }
            }
        }
    } else if(action.type === Modal.IS_SEARCHING) {
        return {
            ...state,
            isSearching: true
        }
    } else if(action.type === Modal.IS_NOT_SEARCHING) {
        return {
            ...state,
            isSearching: false
        }
    }
    return state;
}
export default MovieList;