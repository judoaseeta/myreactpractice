import React from 'react';
import classnames from 'classnames/bind';
import styles from '../styles/NavButton.scss';
const cx = classnames.bind(styles);
const NavButton = ({isMenuOn, MenuOn}) => (
    <div
        className={cx('outer', {
            deactive: isMenuOn
        })}
        onClick={() => MenuOn()}
    >
        <div
            className={cx('middle')}
        >
            <div
                className={cx('inner')}
            >
            
            </div>
        </div>
    </div>
);
export default NavButton;