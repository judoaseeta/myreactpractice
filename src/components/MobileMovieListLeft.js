import React from 'react';
import styles from '../styles/MobileMovieListLeft.scss';
const MobileMovieListLeft = ({currentListLength, keyword, totalNum, setKeyword, submitKeyword}) => (
    <div
        className={styles.container}
    >
        <h4>Search Movies!</h4>
        {
            totalNum 
            ? <p>You get {currentListLength} items of {totalNum} items</p>
            : null
        }
        <input 
            value={keyword}
            onChange={setKeyword}
            onKeyDown={submitKeyword}
        />
    </div>
);  
export default MobileMovieListLeft