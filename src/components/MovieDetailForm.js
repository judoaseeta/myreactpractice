import React from 'react';
import Rater from 'react-rater-plus';
import Button from './Button';
import theme from '../styles/Heart.scss';
import classnames from 'classnames/bind';
import styles from '../styles/MovieDetailForm.scss';
const cx = classnames.bind(styles);
const MovieDetailForm = ({rating, content, isEditing, setContent, setRate, submit, toggleEdit}) => (
    <div
        className={cx('container',{
            active: isEditing
        })}
    >
        <div
            className={cx('overlay')}
            onClick={() => toggleEdit()}
        >
        </div>
        <form
            className={cx('form')}
            onSubmit={submit}
        >
            <h4>Rating for this movie.</h4>
            <Rater 
                item='♥'
                theme={theme}
                rating={rating}
                onRate={setRate}
            />
            <h4>Review for this movie.</h4>
            <textarea 
                cols={50}
                rows={10}
                value={content}
                onChange={setContent}
            />
            <Button
              isBlue
            >Submit</Button>
        </form>
    </div>
);
export default MovieDetailForm;