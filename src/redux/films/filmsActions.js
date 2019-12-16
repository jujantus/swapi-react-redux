import axios from 'axios';
import { FETCH_FILMS, FETCH_FILMS_SUCCESS, FETCH_FILMS_ERROR } from './filmsTypes';

const fetchFilms = () => {
	return {
		type: FETCH_FILMS
	};
};

const fetchFilmsSuccess = (films) => {
	return {
		type: FETCH_FILMS_SUCCESS,
		films: films
	};
};

const fetchFilmsError = (error) => {
	return {
		type: FETCH_FILMS_ERROR,
		error: error
	};
};

export const getFilms = () => {
	return (dispatch) => {
		dispatch(fetchFilms);
		axios
			.get('https://swapi.co/api/films/')
			.then((res) => {
				const films = res.data.results;
				dispatch(fetchFilmsSuccess(films));
			})
			.catch((err) => {
				const error = err.message;
				dispatch(fetchFilmsError(error));
			});
	};
};
