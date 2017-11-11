import React from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/Heart.scss';
const cx = classNames.bind(styles);
const Heart = ({
    active,
    halfActive,
    willBeActive,
    disabled
}) => (
    <a
        className={cx('heart',{
            active: active,
            halfActive: halfActive,
            willBeActive: willBeActive,
            disabled: disabled
        })}
    >♥</a>
);
export default Heart;