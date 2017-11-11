import React from 'react';
import Slide from './transition/Slide';
import ExpandHOC from '../containers/ExpandHOC';
import styles from '../styles/NavBarAuth.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const NavBarAuth = ({authInfo}) => (
        <ExpandHOC authInfo={{email: 'judo@gmail.com'}}>
            {({authInfo, isExpand, onToggle}) => 
                <div
                    className={cx('item_container')}
                >
                    <div
                        className={cx('item')}
                    >
                        {authInfo.email}-
                        <button onClick={() => onToggle()}>o</button>
                        <Slide
                            in={isExpand}
                            timeout={1000}
                        >
                            <div
                                className={isExpand ? cx('item_expanded') : cx('item_not_expanded')}
                            >Hi</div>
                        </Slide>
                    </div>
                </div>
            }
        </ExpandHOC>
);
export default NavBarAuth;