import { Modal } from '../../constants/actionTypes';
import { ModalForSearching, ModalForSearchingOff } from '../Modal';
test('when trigger modal for searching', () => {
    const mockModal = ModalForSearching();
    const expected = {
        type: Modal.IS_SEARCHING
    };
    expect(mockModal).toEqual(expected);
});
test('when trigger modal off', () => {
    const mockModalOff = ModalForSearchingOff();
    const expected = {
        type: Modal.IS_NOT_SEARCHING
    };
    expect(mockModalOff).toEqual(expected);
})