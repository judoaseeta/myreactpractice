import React from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames/bind';
import Modal from './Modal';
import styles from '../styles/Menu.scss';
const cx = classnames.bind(styles);
const Menu = ({isSignedIn, isMenuOn, MenuOff, user, SignOut}) => (
    <Modal>
        <div
            className={cx('menu', {
                active: isMenuOn
            })}
        >
            <div
                className={cx('menu_left')}
            >
            <div
                className={cx('top')}
            >
                <Link
                    className={cx('link')}
                    to="/"
                    onClick={() => MenuOff()}
                    >Home
                </Link>
                <Link
                    className={cx('link')}
                    to="/movies"
                    onClick={() => MenuOff()}
                >Search
                </Link>
                {
                    isSignedIn 
                    ? <Link
                        className={cx('link')}
                        to="/"
                        onClick={() => {
                            SignOut();
                            MenuOff();
                        }}
                    >Sign Out
                    </Link>
                    : <Link
                        className={cx('link')}
                        to="/auth/signup"
                        onClick={() => MenuOff()}
                    >Sign Up
                    </Link>
                }
            </div>
                
            </div>
            <div
                className={cx('menu_right')}
                onClick={() => MenuOff()}
            >
            </div>
        </div>
    </Modal>
);
export default Menu;