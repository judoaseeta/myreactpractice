import { Modal } from '../constants/actionTypes';
export const ModalForSearching = () => (
    {
        type: Modal.IS_SEARCHING
    }
);
export const ModalForSearchingOff = () => (
    {
        type: Modal.IS_NOT_SEARCHING
    }
);
export const ModalForQuerying = () => (
    {
        type: Modal.IS_QUERYING
    }
);
export const ModalForQueryingOff = () => (
    {
        type: Modal.IS_NOT_QUERYING
    }
);