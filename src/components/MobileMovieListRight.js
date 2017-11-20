import React from 'react';
import styles from '../styles/MobileMovieListRight.scss';
const truncate = (string) => {
    if(string.includes(':')) {
        const indexx = string.indexOf(':');
        return (
                <p>{string.slice(0, indexx + 1)}<br /> 
                &nbsp; {string.slice(indexx + 1, string.length)}</p>
        )
    }
    return <p>{string}</p>
}
const MobileListItem = ({movie, MovieById}) => (
    <div
        className={styles.container}
    >
        <div
            className={styles.left}
        >
        <img src={movie.Poster} alt="Poster"/>
        </div>
        <div
            className={styles.right}
        >
            <div
                className={styles.rightBottom}
            >
                <h4>{truncate(movie.Title)}</h4>
                <p>{Number(movie.Year)}</p>
                <span
                    id={styles.detail}
                    onClick={() => MovieById(movie.imdbID)}
                >See details.</span>
            </div>
        </div>
    </div>
);
const MobileMovieListRight = ({setIndex, movies, MovieById}) => (
    <div
        className={styles.list}
    >
        {
            movies.map(movie => {
                return <MobileListItem 
                            key={`movie.imdbId ${Math.random()}`}
                            movie={movie}
                            MovieById={MovieById}
                />
            })
        }
        <button
            id={styles.fetch}
            onClick={() => setIndex(movies.length - 1)}
        >Fetch More</button>        
    </div>
);
export default MobileMovieListRight;