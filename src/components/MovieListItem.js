import React from 'react';
import { Motion, spring } from 'react-motion';
import MovieListItemContent from './MovieListItemContent';
import MovieListItemImage from './MovieListItemImage';
import styles from '../styles/MovieListItem.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);
const MovieListItem = ({active, movie, MovieById, setIndex}) => (
    <Motion
        style={{
            opacity: spring(active ? 1 : 0.7),
            x: spring(active ? 1 : 0.8),
            y: spring(active ? 1: 0.8)
        }}
    >
        {style => 
            <div
                className={cx('container', {
                    active: active
                })}
                style={{
                    opacity: style.opacity,
                    transform: `scale(${style.x}, ${style.y})`
                }}
            >
                <MovieListItemImage 
                    active={active}
                    src={movie.Poster}
                    onClick={setIndex}
                />
                <MovieListItemContent 
                        active={active}
                        imdbID={movie.imdbID}
                        MovieById={MovieById}
                        Title={movie.Title}
                        Year={Number(movie.Year)}
                />
            </div>
        }
    </Motion>
);
export default MovieListItem;