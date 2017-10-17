import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';
describe('<Button />',() => {
    let ButtonWrapper;
    const mockOnClick = jest.fn();
    beforeEach(() => {
        ButtonWrapper = shallow(
            <Button 
                onClick={mockOnClick}
            />
        );
    })
    it('should invoke onClick when it is clicked', () => {
        ButtonWrapper.simulate('click');
        expect(mockOnClick).toHaveBeenCalled();
    })
})