import React from 'react';
import styles from '../styles/Search.scss';
const Search = ({keyword, setKeyword, submitKeyword}) => (
    <div
        className={styles.search}
    >
        <div>
            <h4>Let's search movies!</h4>
            <input 
                value={keyword}
                onChange={setKeyword}
                onKeyDown={submitKeyword}
                placeholder="Type a title"
            />
        </div>
    </div>
);
export default Search;