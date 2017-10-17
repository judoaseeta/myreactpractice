import React from 'react';
import styles from '../styles/StyledInput.scss';
const StyledInput = ({onChange, value, ...props}) => (
    <div
        className={styles.container}
    >
        <h4>Input</h4>
        <input 
            onChange={onChange}
            value={value}
            {...props}
        />
    </div>
);
export default StyledInput;