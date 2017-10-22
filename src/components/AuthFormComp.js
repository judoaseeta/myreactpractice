import React from 'react';
import Button from './Button';
import ValidatedInput from './ValidatedInput';
const AuthFormComp = ({onChange, onSubmit, values}) => (
    <form
        onSubmit={onSubmit}
    >
    <ValidatedInput 
        name="email"
        onChange={onChange}
        type="text"
        value={values.email}
        placeholder="Type Your email"
    />
    <ValidatedInput 
        name="password"
        onChange={onChange}
        type="password"
        value={values.password}
        placeholder="Type Your password"
    />
    <Button
        isBlue
    >
        Submit
    </Button>
</form>
);
export default AuthFormComp;