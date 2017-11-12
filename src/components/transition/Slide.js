import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from '../../styles/transition.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const Slide = ({children, ...props}) => (
    <CSSTransition
        classNames={{
            appear: cx('slide-appear'),
            appearActive: cx('slide-appear-active'),
            enter: cx('slide-enter'),
            enterActive: cx('slide-enter-active'),
            exit: cx('slide-exit'),
            exitActive: cx('slide-exit-active')
        }}
        timeout={500}
        {...props}
    >
    {children}
    </CSSTransition>
);
export default Slide;