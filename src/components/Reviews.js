import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import Slide from './transition/Slide';
import Review from './Review';
import styles from '../styles/Reviews.scss';
const Reviews = ({deleteReview, toggleEdit, title, reviews, userUid}) => (
    <div
        className={styles.reviews}
    >
        <div>
            <h4>Reviews of {title}</h4>
        </div>
        <TransitionGroup
            enter={true}
            exit={true}
        >
            {
                reviews && 
                reviews.map((review) => (
                    <Slide
                        key={review.reviewId}
                    >
                        <Review
                            deleteReview={deleteReview}
                            rating={review.rating}
                            review={review.content}
                            createdAt={review.createdAt}
                            lastModified={review.lastModified}
                            email={review.email}
                            uid={review.uid}
                            userUid={userUid}
                            reviewId={review.reviewId}
                            toggleEdit={toggleEdit}
                        />
                    </Slide>    
                ))
            }
        </TransitionGroup>
    </div>
);
export default Reviews;
 /*
        
        */