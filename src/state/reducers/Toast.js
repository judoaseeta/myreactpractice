import { Toast } from '../constants/actionTypes';
const initialState = {
    isToastOn: false,
    From: '',
    message: ''
}
const ToastReducer = (state = initialState, action ) => {
    switch(action.type) {
        case Toast.TOAST_ON: 
            return {
                isToastOn: true,
                From: action.payload.From,
                message: action.payload.message
            }
        case Toast.TOAST_OFF:
            return {
                isToastOn: false,
                From: '',
                message: ''
            }
        default: return state;
    }
}
export default ToastReducer;