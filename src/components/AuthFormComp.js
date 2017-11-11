import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import ValidatedInput from './ValidatedInput';
import styles from '../styles/AuthForm.scss';
const FormHeader = (type) => {
    if(type === 'signin') {
        return <h3>Sign In</h3>
    } else if (type === 'signup') {
        return <h3>Sign Up</h3>
    }
}
const FormBottom = (type) => {
    if(type === 'signin') {
        return <span>Don't you have id yet? - Go to <Link to="/auth/signup" >Sign Up</Link></span>
    } else if (type === 'signup') {
        return <span>Already have id ? - Go to <Link to="/auth/signin" >Sign In</Link></span>
    }
}
const AuthFormComp = ({type ,onChange, onSubmit, values}) => (
    <div
        className={styles.container}
    >
        <form
            className={styles.form}
            onSubmit={onSubmit}
        >
            {FormHeader(type)}
            <ValidatedInput 
                name="email"
                onChange={onChange}
                type="text"
                value={values.email}
                _placeholder="Type Your email"
            />
            <ValidatedInput 
                name="password"
                onChange={onChange}
                type="password"
                value={values.password}
                _placeholder="Type Your password"
            />
            {FormBottom(type)}
            <Button 
                isBlue
            >
                Submit
            </Button>
        </form>
    </div>
);
export default AuthFormComp;