import { createSelector } from 'reselect';
const takeMovies = (state, title) => {
    if(!state.movieList.List[title]) {
        return null;
    }
    return state.movieList.List[title].movies;
}
const takeTotalNum = (state, title) => {
    if(!state.movieList.List[title]) {
        return null;
    }
    return state.movieList.List[title].totalNum;
}
export const giveMovies = () => createSelector(
    [takeMovies],
     movieList => movieList
);
export const giveTotalNum = () => createSelector(
    [takeTotalNum],
    totalNum => totalNum
);
