import { createSelector } from 'reselect';
const getIsToastOn = state => state.toast.isToastOn;
const getFrom = state => state.toast.From;
const getMessage = state => state.toast.message;
export const giveIsToastOn = () => createSelector(
    [getIsToastOn],
    isToastOn => isToastOn
);
export const giveToast = () => createSelector(
    [getFrom, getMessage],
    (From,message) => {
        return {
            From,
            message
        }
    }
);
