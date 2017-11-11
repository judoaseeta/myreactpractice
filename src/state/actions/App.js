import { App } from '../constants/actionTypes';
export const MenuOpen = () => (
    {
        type: App.MENU_ON
    }
);
export const MenuOff = () => (
    {
        type: App.MENU_OFF
    }
);