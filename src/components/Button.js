import React from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/Button.scss';
const cx = classNames.bind(styles);
const Button = ({children, onClick, styles, ...props}) => (
    <button
        className={cx('button')}
        onClick={onClick ? onClick : null}
        style={styles? styles : null}
        {...props}
    >
        {children}
    </button>
);
export default Button;