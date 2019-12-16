import { FETCH_FILMS, FETCH_FILMS_SUCCESS, FETCH_FILMS_ERROR } from './filmsTypes';

const initialState = {
	loading: false,
	films: [],
	error: ''
};

const filmsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_FILMS:
			return {
				...state,
				loading: true
			};
		case FETCH_FILMS_SUCCESS:
			return {
				...state,
				loading: false,
				films: action.films,
				error: ''
			};
		case FETCH_FILMS_ERROR:
			return {
				...state,
				loading: false,
				films: state.films,
				error: action.error
			};
		default:
			return state;
	}
};

export default filmsReducer;
