import { API_KEY, URL } from './info';
export const fetchMovieById = async (id) => {
    const response = await fetch(`${URL}/?i=${id}&apikey=${API_KEY}`)
    const res = response.json();
    if(res.Response === 'False') {
        throw new Error(res.Error)
    }
    return res; 
};
export const fetchMovieByTitle = async (title, page) => {
    console.log('fetch start');
    const response = await fetch(`${URL}/?s=${title}&apikey=${API_KEY}&page=${page}`);
    const res = response.json();
    console.log('res')
    if(res.Response === 'False') {
        throw new Error(res.Error)
    }
    return res;     
};