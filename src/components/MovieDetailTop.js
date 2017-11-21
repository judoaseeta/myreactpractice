import React from 'react';
import { Motion, spring } from 'react-motion';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/fontawesome-free-solid';
import styles from '../styles/MovieDetailTop.scss'; 
const MovieDetailTop = ({history, Title, Year}) => {
    const initialYear = Year > 2000 ? 1970 : new Date().getFullYear();
    return (
        <div
            className={styles.container}
        >
            <FontAwesomeIcon 
                className={styles.back}
                icon={faArrowCircleLeft} 
                onClick={() => history.goBack()}
            />
            <Motion
                defaultStyle={{
                    year: initialYear
                }}
                style={{
                    year: spring(Number(Year),{
                        stiffness: 50,
                        damping: 17
                    })
                }}
            >
                {style =>
                        <h5 id={styles.title}>{Title} - {style.year.toFixed(0)}</h5>
                }
            </Motion>
        </div>
    );
};
export default MovieDetailTop;