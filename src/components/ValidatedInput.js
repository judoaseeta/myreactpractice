import React from 'react';
import RegexUtil from '../utils/RegexUtil';
import styles from '../styles/ValidatedInput.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const ValidatedInput = (props) => {
    let inputRef;
        return(
            <div
                className={cx('container')}
                onClick={() => inputRef.focus()}
            >
                <p
                    className={cx('placeholder')}
                >{props.placeholder}</p>
                <input
                    className={cx('inputfield')}
                    onChange={props.onChange}
                    name={props.name}
                    ref={ref => inputRef = ref}
                    value={props.value}
                    {...props}
                />
                <p
                    className={cx('error')}
                >{RegexUtil(props.name, props.value)}</p>
            </div>
        )
}
export default ValidatedInput;