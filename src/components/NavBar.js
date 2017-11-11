import React from 'react';
import classNames from 'classnames/bind';
import NavBarItem from './NavBarItem';
import styles from '../styles/NavBar.scss';
const cx = classNames.bind(styles);
const NavBar = (props) => (
    <nav
        className={cx('container_outer')}
    >
        <div
            className={cx('container_inner_left')}
        >
            <NavBarItem
                to="/"
            >
                Home
            </NavBarItem>
        </div>
        <div
            className={cx('container_inner_right')}
        ></div>
    </nav>
);
export default NavBar;