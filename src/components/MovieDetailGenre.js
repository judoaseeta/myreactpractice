import React from 'react';
import styles from '../styles/MovieDetailGenre.scss';
const MovieDetailGenre = ({Genre}) => (
    <div
        className={styles.container}
    >
        <h4>Genre</h4>
        {Genre.split(', ').map(genre => 
            <p
                key={genre}
            >{genre}</p>
        )}
    </div>
);
export default MovieDetailGenre;
