import React from 'react';
import { Motion, spring } from 'react-motion';
import MovieListItem from './MovieListItem';
import styles from '../styles/MovieListBottom.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const MovieListBottom = ({
    activeIndex, 
    calcTranslateX, 
    setIndex, 
    title, 
    totalNum, 
    movies,
    MovieById
}) =>(
    <div
        className={cx('outer')}
    >
        {
            movies
            ? <Motion
                style={{
                    x: spring(calcTranslateX(activeIndex))
                }}
            >
                {({x})=> 
                    
                        <div
                            className={cx('inner')}
                            style={{
                                transform: `translateX(${x}px)`
                            }}
                        >
                            {movies.map((movie, index) => 
                                <MovieListItem 
                                    active={index === activeIndex } 
                                    key={`movie.imdbID + ${Math.random()}`}
                                    movie={movie}
                                    MovieById={MovieById}
                                    setIndex={() => setIndex(index)}
                                />)
                            }
                        </div>
                }
            </Motion>
            : null
        }
        
    </div>
);
export default MovieListBottom;