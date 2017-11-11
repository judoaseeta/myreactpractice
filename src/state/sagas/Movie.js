import { take, takeEvery, call ,put, race } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { fetchMovieById, fetchMovieByTitle } from '../../utils/MovieApi';
import { CancelMovieById, CancelMoviesByTitle } from '../actions/ApiRequest';
import { AttachListner } from '../actions/Reviews';
import { toastOn } from '../actions/Toast';
import { ModalForSearching, ModalForSearchingOff, ModalForQuerying, ModalForQueryingOff } from '../actions/Modal';
import { SetMovieList } from '../actions/MovieList';
import { SetMovieDetail } from '../actions/MovieDetail';
import { Movie } from '../constants/actionTypes';
export function* MovieByTitle(action) {
    yield put(ModalForSearching());
    const { title, page } = action.payload;
    try {
        const { fetchedMovies } = yield race({
            fetchedMovies: call(fetchMovieByTitle, title, page),
            cancelFetching: take(CancelMoviesByTitle)
        });
        if( fetchedMovies !== null) {
            const Movies = fetchedMovies;
            yield put(SetMovieList(Movies, title, page));
            if(page === 1) {
                yield put(push(`/movies?title=${title}`));
            }
            yield put(ModalForSearchingOff());
        } else if(!fetchedMovies) {
            yield put(toastOn('There is no movie by this keyword'));
        } else {
            yield put(ModalForSearchingOff());
            yield put(toastOn('Searching is cancelled'));
        }
    } catch(e) {
        yield put(ModalForSearchingOff());
        yield put(toastOn(`when searching ${title}`,e.message));
    }
    /* The initial idea was below code. The problem of below code is
    whether user cancel saga or not, it always executes code in finally.
    it is much better to use race for cancelling effects.
    try {
        yield delay(5000);
        const Movies = yield call(fetchMovieByTitle, title, page);
        if(!Movies.Search) {
            throw new Error('there are no movies like that!');
        }
        yield [
            put(SetMovieList(Movies, title, page)),
            put(push(`/movies?title=${title}`)),
            put(ModalForSearchingOff())
        ]
        return;
    } catch(e) {
        yield put(toastOn(`when searching ${title}`,e.message));
    } finally {
        if (yield cancelled()) {
            yield put(ModalForSearchingOff());
            yield put(toastOn('Searching is cancelled'));
        }
    }
    */
}
export function* MovieQueryById(action) {
    yield put(ModalForQuerying());
    const { id } =  action.payload;
    try {
        const { detail } = yield race({
            detail: call(fetchMovieById, id),
            cancelFetching: take(CancelMovieById)
        });
        if(detail) {
            yield put(SetMovieDetail(detail));
            yield put(push(`/detail/${id}`));
            yield put(AttachListner(id));
            yield put(ModalForQueryingOff());
        } else {
            yield put(ModalForQueryingOff());
            yield put(toastOn(`when loading movieDetail..`, 'Cancelled!'))
        }
        
    } catch(e) {
        yield put(ModalForQueryingOff());
        yield put(toastOn(`when loading ${id}`,e.message));
    } 
}
export function* WatchMoviesByTitle() {
    yield takeEvery(Movie.REQUEST_MOVIE_BY_TITLE, MovieByTitle);
    /* below is legacy code.
    while(true) {
        
        console.log(action);
        const { title, page } = action.payload;
        yield put(ModalForSearching());
        const request = yield fork(MovieByTitle, title,page);
        yield take(CancelMoviesByTitle)
        yield cancel(request);
    }
    */
}
export function* WatchMovieById() {
    yield takeEvery(Movie.REQUEST_MOVIE_BY_ID, MovieQueryById);
    /*
    while(true) {
        const action = yield take(MovieById);
        const { id } =  action.payload;
        const request = yield fork(MovieQueryById, id);
        if( yield take(CancelMovieById)) {
            yield cancel(request);
        }
    }
    */
}