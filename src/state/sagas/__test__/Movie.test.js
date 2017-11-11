import { Movie } from '../../constants/actionTypes';
import { getUser, MovieByTitle, MovieQueryById, WatchMoviesByTitle } from '../Movie';
import { SetMovieList } from '../../actions/MovieList';
import { SetMovieDetail } from '../../actions/MovieDetail';
import { AttachListner } from '../../actions/Reviews';
import { fetchMovieByTitle, fetchMovieById } from '../../../utils/MovieApi';
import { CancelMoviesByTitle, CancelMovieById } from '../../actions/ApiRequest';
import { ModalForSearching, ModalForSearchingOff,ModalForQuerying, ModalForQueryingOff } from '../../actions/Modal';
import { toastOn } from '../../actions/Toast';
import { take, call} from 'redux-saga/effects';
import { testSaga } from 'redux-saga-test-plan';
import { push } from 'react-router-redux';
import mockDetail from '../../../components/__test__/mockMovieDetail';
import mockReviews from '../../../components/__test__/mockMovieReviews';
test('testing MovieByTitle assume when fetch is success in case of page1', () => {
    const mockMovies = [
        {
            title: 'Return of the jedis',
            imdbId: 'fefewew',
            Year: 1978,
            Type: 'movie'
        },
        {
            title: 'An invisible ',
            imdbId: 'efewdv',
            Year: 2001,
            Type: 'movie'
        }
    ]
    const mockAction = {
        payload : {
            title :'return',
            page : 1
        }
    }
    const mockFetchedMovies = mockMovies;
    const saga = testSaga(MovieByTitle, mockAction);
        saga.next()
            .put(ModalForSearching())
            .next()
            .race(
                {
                    fetchedMovies: call(fetchMovieByTitle, mockAction.payload.title, mockAction.payload.page),
                    cancelFetching: take(CancelMoviesByTitle)
                })
            .next({fetchedMovies: mockFetchedMovies})
            .put(SetMovieList(mockFetchedMovies, mockAction.payload.title, mockAction.payload.page))
            .next()
            .put(push(`/movies?title=${mockAction.payload.title}`))
            .next()
            .put(ModalForSearchingOff())
            .next()
            .isDone()
});
test('testing MovieByTitle assume when fetch is success in case of page > 1', () => {
    const mockMovies = [
        {
            title: 'Return of the jedis',
            imdbId: 'fefewew',
            Year: 1978,
            Type: 'movie'
        },
        {
            title: 'An invisible ',
            imdbId: 'efewdv',
            Year: 2001,
            Type: 'movie'
        }
    ]
    const mockAction = {
        payload : {
            title :'return',
            page : 2
        }
    }
    const mockFetchedMovies = mockMovies;
    const saga = testSaga(MovieByTitle, mockAction);
        saga.next()
            .put(ModalForSearching())
            .next()
            .race(
                {
                    fetchedMovies: call(fetchMovieByTitle, mockAction.payload.title, mockAction.payload.page),
                    cancelFetching: take(CancelMoviesByTitle)
                })
            .next({fetchedMovies: mockFetchedMovies})
            .put(SetMovieList(mockFetchedMovies, mockAction.payload.title, mockAction.payload.page))
            .next()
            .put(ModalForSearchingOff())
            .next()
            .isDone()
});
test('testing MovieByTitle assume when fetch is fail', () => {
    const mockAction = {
        payload : {
            title :'return',
            page : 1
        }
    }
    const saga = testSaga(MovieByTitle, mockAction);
        saga.next()
            .put(ModalForSearching())
            .next()
            .race(
                {
                    fetchedMovies: call(fetchMovieByTitle, mockAction.payload.title, mockAction.payload.page),
                    cancelFetching: take(CancelMoviesByTitle)
                })
            .throw(new Error('Movie Not Found'))
            .put(ModalForSearchingOff())
            .next()
            .put(toastOn(`when searching ${mockAction.payload.title}`,'Movie Not Found'))
            .next()
            .isDone()
        /*
            .call(fetchMovieByTitle, mockTitle, mockPage)
            .throw(new Error('Movie Not Found'))
            .put(toastOn(`when searching ${mockTitle}`,'Movie Not Found'))
            .next()
            .isDone()
        */
});
/*
test('testing MovieByTitle assume when fetch is cancelled', () => {
    const mockTitle = 'return';
    const mockPage = 1;
    const saga = testSaga(MovieByTitle, mockTitle, mockPage);
        saga.next()
            .cancelled()
            .put(ErrorWhenMovieSearch('Searching is cancelled'))
});
*/
test('testing WatchMovieByTitle when it takes MoviesByTitle', () => {
    const saga = testSaga(WatchMoviesByTitle);
    saga.next()
        .takeEveryEffect(Movie.REQUEST_MOVIE_BY_TITLE, MovieByTitle)
});
test('testing MovieQueryById when fetch is resolved', () => {
    const mockId = 'oryoy';
    const mockAction = { payload: { id: mockId}}
    const saga =testSaga(MovieQueryById, mockAction);
    saga.next()
        .put(ModalForQuerying())
        .next()
        .race(
            {
                detail: call(fetchMovieById, mockAction.payload.id),
                cancelFetching: take(CancelMovieById)
            })
        .next({detail: mockDetail})
        .put(SetMovieDetail(mockDetail))
        .next()
        .put(push(`/detail/${mockId}`))
        .next()
        .put(AttachListner(mockId))
        .next()
        .put(ModalForQueryingOff())
});
test('testing MovieQueryById when fetch is rejected', () => {
    const mockId = 'oryoy';
    const mockAction = { payload: { id: mockId}}
    const saga =testSaga(MovieQueryById, mockAction);
    saga.next()
        .put(ModalForQuerying())
        .next()
        .race(
            {
                detail: call(fetchMovieById, mockAction.payload.id),
                cancelFetching: take(CancelMovieById)
            })
        .throw(new Error('detail is not found'))
        .put(ModalForQueryingOff())
        .next()
        .put(toastOn(`when loading ${mockId}`, 'detail is not found'))
})