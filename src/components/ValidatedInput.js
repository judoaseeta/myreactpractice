import React from 'react';
import '../styles/ValidatedInput.scss';
const ValidatedInput = (props) => {
    let inputRef;
        return(
            <div
                className='container'
                onClick={() => inputRef.focus()}
            >
                <p
                    className="placeholder"
                >{props.placeholder}</p>
                <input
                    className="inputfield"
                    onChange={props.onChange}
                    ref={ref => inputRef = ref}
                    {...props}
                />
                <p
                    className="error"
                >{props.error}</p>
            </div>
        )
}
export default ValidatedInput;