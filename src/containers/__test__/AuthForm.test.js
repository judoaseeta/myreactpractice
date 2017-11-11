import React from 'react';
import { AuthForm } from '../AuthForm';
import AuthFormComp from '../../components/AuthFormComp';
import ValidatedInput from '../../components/ValidatedInput';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
describe('<AuthForm />', () => {
    let Wrapper;
    const mockMatch = {
        params: {
            type: 'signin'
        }
    }
    const mockAuthRequest = jest.fn();
    beforeEach(() => {
        Wrapper = mount(
            <MemoryRouter
                initialEntries={['/auth/signin']}
                initialIndex={0}
            >
                <AuthForm
                    AuthRequest={mockAuthRequest}
                    match={mockMatch}
                >
                    {({type, onChange, onSubmit, values}) => 
                        <AuthFormComp 
                            type={type}
                            onChange={onChange}
                            onSubmit={onSubmit}
                            values={values}
                        />
                    }
                </AuthForm>
            </MemoryRouter>
        );
    });
    it('should render 2 <ValidatedInput />', () => {
        const inputs = Wrapper.find(ValidatedInput);
        expect(inputs.length).toEqual(2);
    });
    it('should change state value when type to input of <ValidateInput />', () => {
        const emailInput = Wrapper.find('input').first();
        const initialStateValue = emailInput.props().value;
        expect(initialStateValue).toEqual('');
        emailInput.simulate('change', {
            target: {
                name: 'email',
                value: 'judo@'
            }
        });
        const secondStateValue = Wrapper.find('input').first().props().value;
        expect(secondStateValue).toEqual('judo@');
        // and there should be error message is rendered. 
        // because typed email isn't completed.
        const findError = Wrapper.find('p.error').first();
        expect(findError.text()).toEqual("It's not an email address.");
    });
    it('should be able to submit when value is validated', () => {
        const emailInput = Wrapper.find('input').first();
        const pwInput = Wrapper.find('input').last();
        const form = Wrapper.find('form');
        emailInput.simulate('change', {
            target:{
                name: 'email',
                value: 'judo@gmail.com'
            }
        });
        pwInput.simulate('change', {
            target: {
                name: 'password',
                value: 'Bb134434!'
            }
        });
        form.simulate('submit');
        expect(mockAuthRequest).toHaveBeenCalled();
        expect(mockAuthRequest).toHaveBeenCalledWith('signin','judo@gmail.com','Bb134434!' );
    });
})