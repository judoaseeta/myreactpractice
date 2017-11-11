import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import appReducer from './App';
import AuthReducer from './Auth';
import MovieDetailReducer from './MovieDetail';
import MovieList from './MovieList';
import Toast from './Toast';
const rootReducer = combineReducers({
    app: appReducer,
    auth: AuthReducer,
    movieDetail: MovieDetailReducer,
    movieList: MovieList,
    toast: Toast,
    router: routerReducer
});
export default rootReducer;