import React from 'react';
import classnames from 'classnames/bind';
import styles from '../styles/MovieDetailBigImage.scss';
const cx = classnames.bind(styles);
const MovieDetailBigImage = ({id, isShowingImage, toggleImage}) => (
    <div
        className={cx('container',{
            active: isShowingImage
        })}
    >
        <div
            className={cx('overlay')}
            onClick={() => toggleImage()}
        ></div>
        <img 
            src={`http://img.omdbapi.com/?i=${id}&h=600&apikey=f42ed7e7`} 
            alt="Big Poster"
        />
    </div>
);
export default MovieDetailBigImage;