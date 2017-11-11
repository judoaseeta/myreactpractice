import React from 'react';
import { mount } from 'enzyme';
import { ToastHoc } from '../Toast';
jest.useFakeTimers();
describe('testing Toast', () => {
    let Wrapper;
    const mockToastOff = jest.fn();
    beforeEach(() => {
        Wrapper = mount(
            <ToastHoc
                toastOff={mockToastOff}
            >
                {({From, message}) => 
                    <div>
                        <p>{From}</p>
                        <p>{message}</p>
                    </div>
                }
            </ToastHoc>
        )
    });
    it('should invoke toastOff when component is mounted', () => {
        expect(mockToastOff).not.toHaveBeenCalled();
        jest.runAllTimers();
        expect(mockToastOff).toHaveBeenCalled();
    });
})