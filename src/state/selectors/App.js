import { createSelector } from 'reselect';
const getMenuOn = state => state.app.isMenuOn;
const getAuth = state => state.auth;
const getIsSearching = state => state.movieList.isSearching;
const getIsQuerying =  state => state.movieDetail.isQuerying;
export const giveMenuOn = () => createSelector(
    [getMenuOn],
    isMenuOn => isMenuOn
);
export const giveAuth = () => createSelector(
    [getAuth],
    auth => auth
);
export const giveIsSearching = () => createSelector(
    [getIsSearching],
    isSearching => isSearching
);
export const giveIsQuerying = () => createSelector(
    [getIsQuerying],
    isQuerying => isQuerying
)