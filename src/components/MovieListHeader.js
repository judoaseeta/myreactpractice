import React from 'react';
import { Motion, spring} from 'react-motion';
import styles from '../styles/MovieListHeader.scss';
const ItemNumbers = (currentListLength) => (
    <Motion
        defaultStyle={{
            v: 0
    }}
        style={{
            v: spring(currentListLength)
    }}
    > 
        {({v}) =>
        <span>{v.toFixed(0)}</span> 
        }   
    </Motion>
)
const MovieListHeader = ({currentListLength, keyword, totalNum, setKeyword, submitKeyword}) => (
    <div
        className={styles.container}
    >
        <h4>Search Result for:</h4>
        <input 
            className={styles.searchBar}
            value={keyword}
            onChange={setKeyword}
            onKeyDown={submitKeyword}
        />
        {
            currentListLength 
            ? <h5>You get {ItemNumbers(currentListLength)} from <span>{totalNum}</span> total results.</h5>
            : null
        }
    </div>
);
export default MovieListHeader;