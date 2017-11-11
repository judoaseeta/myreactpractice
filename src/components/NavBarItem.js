import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/NavBarItem.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const NavBarItem = ({children,to}) => (
    <div
        className={cx('container')}
    >
        <NavLink
            activeClassName={cx('item_active')}
            className={cx('item')}
            to={to}
        >
            {children}
        </NavLink>
    </div>
);
export default NavBarItem;