import React from 'react';
import styles from '../styles/MovieListItemContent.scss';
import { Motion, spring } from 'react-motion';
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
const MovieListItemContent = ({active, imdbID, MovieById, Title, Year}) => (
    <Motion
        active={active}
        style={{
            opacity: spring(active ? 1 : 0),
            width: spring(active ? 300: 0)
        }}
    >
        {(style)=>
        <div
            className={styles.content}
            style={{
                alignItems:'stretch',
                display: (active ? 'flex' : 'none'),
                flexDirection: 'column',
                justifyContent: 'flex-end',
                opacity: style.opacity,
                width: `${style.width}px`
            }}
        >
            <div>
                {truncate(Title)}
                <p>{Year}</p>
                <p 
                    className={styles.seeDetail}
                    onClick={() => MovieById(imdbID)}
                    >See Details.</p>
            </div>
        </div>
        }
    </Motion>
    
);
export default MovieListItemContent;