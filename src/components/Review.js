import React from 'react';
import TimeAgo from 'react-timeago';
import { Motion, spring } from 'react-motion';
import Rater from 'react-rater-plus';
import classNames from 'classnames/bind';
import theme from '../styles/Heart.scss';
import styles from '../styles/Review.scss';
const cx = classNames.bind(styles);
const truncatedEmail = (email) => {
    const indexfortrun =  email.indexOf('@');
    return `${email.slice(0, indexfortrun - 3)}xxx${email.slice(indexfortrun, email.length)}`
}
const Review = ({
    createdAt,
    deleteReview,
    email,
    lastModified,
    isDeleting, 
    isEditing,
    rating, 
    review, 
    reviewId,
    toggleDelete,
    toggleEdit,
    onRateChange,
    onReviewChange,
    uid,
    userUid,
}) => (
    <div
        className={cx('review',{
            users: uid === userUid
        })}
    >
        <div
            className={cx('review_header')}
        >
            <div>
                <Motion
                    defaultStyle={{
                        rating: 0
                    }}
                    style={{
                        rating: spring(rating)
                    }}
                >
                    {(style) =>
                        <Rater 
                            item='♥'
                            theme={theme}
                            rating={style.rating}
                    />
                    }   
                </Motion>
            </div>
            <div>
                <p
                    className={cx('email')}
                >{truncatedEmail(email)}</p>
                {
                    uid === userUid
                    ? <span
                        className={cx('delete')}
                        onClick={() => deleteReview(reviewId)}
                    >
                        Delete
                    </span>
                    : null
                }
            </div>
        </div>
        <div>
            <p
                className={cx('para')}
            >{review}</p>
        </div>
        <div
            className={cx('review_footer')}
        >
            {   
                uid === userUid
                ? <span
                    className={cx('edit')}
                    onClick={() => toggleEdit(reviewId,review, rating)}
                >Edit</span> 
                : null
            }
            <TimeAgo
                live={false}
                date={createdAt}
                style={{
                    color: '#868e96',
                    fontSize: '11px'
                }}
            />
            <TimeAgo
                live={false}
                date={lastModified}
                style={{
                    color: '#868e96',
                    fontSize: '11px'
                }}
            />
        </div>
    </div>
);
export default Review;