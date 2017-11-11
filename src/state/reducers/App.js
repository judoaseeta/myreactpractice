import { App } from '../constants/actionTypes';
const initialState = {
    isMenuOn: false
}
const appReducer = (state = initialState, action) => {
    if(action.type === App.MENU_ON) {
        return {
            isMenuOn: true
        }
    } else if (action.type === App.MENU_OFF) {
        return {
            isMenuOff: false
        }
    }
    return state;
}
export default appReducer;