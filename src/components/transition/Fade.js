import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from '../../styles/transition.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const Fade = ({children, ...props}) => (
    <CSSTransition
        classNames={{
            enter: cx('fade-enter'),
            enterActive: cx('fade-enter-active'),
            exit: cx('fade-exit'),
            exitActive: cx('fade-exit-active')
        }}
        {...props}
    >
    {children}
    </CSSTransition>
);
export default Fade;