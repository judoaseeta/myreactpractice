import React from 'react';
import { Motion, spring } from 'react-motion';
import MovieDetailImage from './MovieDetailImage';
import MovieDetailRating from './MovieDetailRating';
import MovieDetailTop from './MovieDetailTop';
import MovieDetailPlot from './MovieDetailPlot';
import styles from '../styles/MovieDetail.scss';
import classNames from 'classnames/bind';
import mockData from './__test__/mockMovieDetail';
const cx = classNames.bind(styles);
const MovieDetail = (props) => (
    <div
        className={cx('container')}
    >
        <div
            className={cx('panel_top')}
        >
            <MovieDetailTop
                Director={mockData.Director} 
                Title={mockData.Title}
                Year={2016}
            />        
        </div>
        <div
            className={cx('plot')}
        >
            <MovieDetailPlot 
                Plot={mockData.Plot}
            />
        </div>
        <div
            className={cx('image')}
        >
            <MovieDetailImage 
                Poster={mockData.Poster}
            />
        </div>
        <div
        className={cx('actors')}
        >Actors
        </div>
        <div
        className={cx('rating')}
        >
            <MovieDetailRating
                imdbRating={mockData.imdbRating}
                Metascore={mockData.Metascore}
                Ratings={mockData.Ratings}
            />
        </div>
        <div
            className={cx('replies')}
        >Replies
        </div>
        <div
            className={cx('reply_form')}
        >Reply_form
        </div>
        <div
            className={cx('box')}
            >H
        </div>
        <div
            className={cx('box')}
        >H
        </div>
        <div
            className={cx('box')}
        >H
        </div>
    </div>
);
export default MovieDetail;