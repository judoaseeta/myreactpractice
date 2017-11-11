import React from 'react';
import MobileMovieListLeft from './MobileMovieListLeft';
import MobileMovieListRight from './MobileMovieListRight';
import classnames from 'classnames/bind';
import styles from '../styles/MobileMovieList.scss';
const cx = classnames.bind(styles);
const MobileMovieList = ({currentListLength, keyword, movies, MovieById, totalNum, setKeyword, submitKeyword}) => (
    <div
        className={cx('container')}
    >
        <div
            className={cx('left')}
        >
            <MobileMovieListLeft 
                currentListLength={currentListLength}
                keyword={keyword}
                totalNum={totalNum}
                setKeyword={setKeyword}
                submitKeyword={submitKeyword}
            />
        </div>
        <div
            className={cx('right')}
        >
            <div
                className={cx('overlay')}
            >
                {
                    movies 
                    ? <MobileMovieListRight 
                        movies={movies}
                        MovieById={MovieById}
                    />
                    :null
                } 
            </div>
        </div>
    </div> 
);
export default MobileMovieList;