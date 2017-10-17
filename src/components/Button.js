import React from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/Button.scss';
const cx = classNames.bind(styles);
const Button = (
    {
        children, 
        isBlack,
        isBlue, 
        isGreen,
        isRed, 
        onClick, 
        styles, 
        ...props
    }
) => (
    <button
        className={cx('button', {
            black: isBlack,
            blue: isBlue,
            green: isGreen,
            red: isRed
        })}
        onClick={onClick ? onClick : null}
        style={styles? styles : null}
        {...props}
    >
        {children}
    </button>
);
export default Button;