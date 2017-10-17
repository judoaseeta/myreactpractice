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
    it("has class '.button' ", () => {
        const button= ButtonWrapper.find('button').first();
        // it is expected make an error because 
        // using css-module makes class as a hash <value className=""></value>
        expect(button.hasClass('button')).toBe(true);
    });
    it("has class '.red' when set props 'isRed'", () => {
        ButtonWrapper.setProps({
            isRed: true
        });
        const button= ButtonWrapper.find('button').first();
        expect(button.hasClass('red')).toBe(true);
    })
    it('should invoke onClick when it is clicked', () => {
        ButtonWrapper.simulate('click');
        expect(mockOnClick).toHaveBeenCalled();
    });
})