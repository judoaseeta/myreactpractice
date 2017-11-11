import React from 'react';
import Modal from './Modal';
import MovieDetailBigImage from './MovieDetailBigImage';
import MovieDetailForm from './MovieDetailForm';
import MovieDetailGenre from './MovieDetailGenre';
import MovieDetailImage from './MovieDetailImage';
import MovieDetailRating from './MovieDetailRating';
import MovieDetailTop from './MovieDetailTop';
import MovieDetailPlot from './MovieDetailPlot';
import Reviews from './Reviews';
import styles from '../styles/MovieDetail.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const ReviewAddCompo = ({reviews, userReviewId, userUid, Title, toggleEdit}) => {
    if(!userUid) {
        return <div
            className={styles.noreview}
        >
            <p>To write review, you need to signIn</p>
        </div>
    }
    if(reviews && reviews.length > 0 && !userReviewId) {
        return <div
            className={styles.noUserReview}
        >
            <p>How about writing your first review of <br/> <span id={styles.innerTitle}>{Title}</span>?</p>
            <span
                id={styles.addReview}
                onClick={() => toggleEdit()}
            >Write your review</span>
        </div>
    } else if(reviews && reviews.length === 0) {
        return <div
            className={styles.noreview}
        >
            <p>There is no review yet!</p>
            <p>How about writing the first review of <br/> <span id={styles.innerTitle}>{Title}</span>?</p>
            <span
                id={styles.addReview}
                onClick={() => toggleEdit()}
            >Write new review</span>
        </div>
    }
    return null;
}
const ReviewCompo = ({detail, deleteReview, reviews, userReviewId, userUid, toggleEdit}) => {
    if(reviews && reviews.length > 0 ) {
        return (
                <Reviews 
                    deleteReview={deleteReview}
                    title={detail.Title}
                    reviews={reviews}
                    userUid={userUid}
                    toggleEdit={toggleEdit}
                />
        )
    }
    return null;
}
const MovieDetail = ({
    content, 
    detail, 
    deleteReview,
    reviews, 
    isEditing, 
    isShowingImage,
    history,
    rating, 
    userUid, 
    userReviewId,
    toggleEdit,
    toggleImage,
    setRate, 
    setContent,
    submit
    }) => (
    <div
        className={cx('outer')}
    >
        <Modal
        >
            <MovieDetailForm 
                content={content}
                isEditing={isEditing}
                setRate={setRate}
                setContent={setContent}
                rating={rating}
                submit={submit}
                toggleEdit={toggleEdit}
            />
        </Modal>
        <Modal>
            <MovieDetailBigImage 
                id={detail ? detail.imdbID : ''}
                isShowingImage={isShowingImage}
                toggleImage={toggleImage}
            />
        </Modal>
        {
            detail 
            ?   <div
                    className={cx('container')}
            >
                <div
                    className={cx('panel_top')}
                >
                    <MovieDetailTop
                        history={history}
                        Title={detail.Title}
                        Year={Number(detail.Year)}
                    />        
                </div>
                <div
                    className={cx('plot')}
                >
                    {
                        detail.Plot 
                    ? <MovieDetailPlot 
                        Plot={detail.Plot}
                    />
                    : null
                    }
                </div>
                <div
                    className={cx('image')}
                >
                    <MovieDetailImage 
                        Poster={detail.Poster}
                        onClick={toggleImage}
                    />
                </div>
                <div
                    className={cx('actors')}
                >
                    <h4>Actors</h4>
                    {
                        Array.isArray(detail.Actors)
                        ? detail.Actors.split(',').map(actor => <p key={actor}>{actor}</p>)
                        : <p>{detail.Actors}</p>
                    }
                </div>
                <div
                    className={cx('genre')}
                >
                    {
                        detail.Genre
                        ? <MovieDetailGenre 
                            Genre={detail.Genre}
                        />
                        : null
                    }  
                </div>
                <div
                    className={cx('rating')}
                >
                    {
                        detail.Ratings
                        ? <MovieDetailRating
                            imdbRating={detail.imdbRating}
                            Metascore={detail.Metascore}
                            Ratings={detail.Ratings}
                        />
                        : null
                    }
                </div>
                <div
                    className={cx('reviews')}
                >
                    <ReviewAddCompo 
                        reviews={reviews}
                        userReviewId={userReviewId}
                        userUid={userUid}
                        toggleEdit={toggleEdit}
                        Title={detail.Title}
                    />
                    <ReviewCompo 
                        detail={detail}
                        deleteReview={deleteReview}
                        reviews={reviews}
                        userReviewId={userReviewId}
                        userUid={userUid}
                        toggleEdit={toggleEdit}
                    />
                </div>
            </div>
        : null
        }
    </div>
);
export default MovieDetail;