import React from 'react';
import MobileMovieList from './MobileMovieList';
import MovieListHeader from './MovieListHeader';
import MovieListBottom from './MovieListBottom';
import styles from '../styles/MovieList.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const MovieListCompo = 
({
    activeIndex, 
    CancelMoviesByTitle, 
    calcTranslateX,
    isSearching,
    isQuerying,
    keyword,
    MovieById,
    Movies,
    TotalNum,
    setIndex, 
    setKeyword, 
    submitKeyword
}) => (
    <div>
        <div
            className={cx('container')}
        >
            <div
                className={cx('overlay')}
            >
                <div
                    className={cx('header')}
                >
                    
                    <MovieListHeader
                        currentListLength={Movies? Movies.length : null}
                        keyword={keyword}
                        setKeyword={setKeyword}
                        submitKeyword={submitKeyword}
                        totalNum={TotalNum? TotalNum : null}
                    />
                </div>
                <div>
                    <MovieListBottom 
                        activeIndex={activeIndex}
                        calcTranslateX={calcTranslateX}
                        setIndex={setIndex}
                        movies={Movies ? Movies : null}
                        MovieById={MovieById}
                    />
                </div>
            </div>
        </div>
        <MobileMovieList 
            currentListLength={Movies? Movies.length : null}
            keyword={keyword}
            movies={Movies ? Movies : null}
            MovieById={MovieById}
            setKeyword={setKeyword}
            submitKeyword={submitKeyword}
            totalNum={TotalNum? TotalNum : null}
        />
    </div>
    
);
export default MovieListCompo;