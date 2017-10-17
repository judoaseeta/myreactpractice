import React from 'react';
import { shallow } from 'enzyme';
import ValidatedInput from '../ValidatedInput';
describe('<ValidatedInput />', () => {
    let ValInputWrapper;
    const mockOnChange =  jest.fn();
    beforeEach(() => {
        ValInputWrapper = shallow(
            <ValidatedInput 
                name="email"
                value="judoaseeta@gmail.com"
                onChange={mockOnChange}
            />
        )
    });
    it("should have class '.container'", () => {
        const Container = ValInputWrapper.find('div').first();
        expect(Container.hasClass('container')).toBe(true);
    });
    it('should render error message when value is not validated', () => {
        ValInputWrapper.setProps({
            value: 'judo@'
        });
        const errorMessage = ValInputWrapper.find('p').last();
        expect(errorMessage.text()).toEqual("It's not an email address.");
    });
    it('should invoke onChange when value is changed', () => {
        const inputField = ValInputWrapper.find('input');
        inputField.simulate('change');
        expect(mockOnChange).toHaveBeenCalled();
    })
})