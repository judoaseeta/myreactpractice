import React from 'react';
import Modal from './Modal';
import classnames from 'classnames/bind';
import styles from '../styles/Toast.scss';
const cx = classnames.bind(styles);
const ToastComponent = ({From, isToastOn, message, toastOff}) => (
    <Modal>
        <div
            className={cx('container', {
                active: isToastOn
            })}
            onClick={() => toastOff()}
        >
            <div
                className={cx('inner')}
            >
                <p>{From}</p>
                <p>{message}</p>
            </div>
        </div>
    </Modal>
);
export default ToastComponent;