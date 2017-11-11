import { Toast } from '../constants/actionTypes';
export const toastOn = (From, message) => (
    {
        type:Toast.TOAST_ON,
        payload: {
            From,
            message
        }
    }
)
export const toastOff = () => (
    {
        type: Toast.TOAST_OFF
    }
)