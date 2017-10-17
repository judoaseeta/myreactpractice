import React from  'react';
import Render from '../utils/RenderProps';
import ValidatedInput from './ValidatedInput';
class AuthForm extends React.Component {
    render() {
        return (
            <Render
                onChange={this.onChange}
                onSubmit={this.onSubmit}
            >
                {(onChange, onSubmit) => {
                    return <form
                        onSubmit={onSubmit}
                    >
                        <ValidatedInput 
                            name="email"
                            onChange={onChange}
                            type="email"
                            placeholder="Type Your email"
                        />
                        <ValidatedInput 
                            name="password"
                            onChange={onChange}
                            type="password"
                            placeholder="Type Your password"
                        />
                    </form>               
                }}
            </Render>
        );
    }
    onChange({value}) {
        // do something
    }
};
export default AuthForm;