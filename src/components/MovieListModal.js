import React from 'react';
import Button from './Button';
import styles from '../styles/MovieListModal.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);
const MovieListModal = ({
    CancelMovieById, 
    CancelMoviesByTitle,
    isSearching,
    isQuerying
}) => (
    <div
        className={cx('container',{
            active: isSearching || isQuerying
        })}
    >
        <div
            className={cx('inner')}
        >
            <div
                className={styles.progress}
            >
                <div
                    className={styles.inline}
                ></div>
            </div>
            <Button
                isRed
                onClick={isSearching ? () =>  CancelMoviesByTitle(): () => CancelMovieById()}
            >Cancel</Button>
        </div>
    </div>
);
export default MovieListModal;