import { FETCH_PEOPLE, FETCH_PEOPLE_SUCCESS, FETCH_PEOPLE_ERROR } from './peopleTypes';

const initialState = {
	loading: false,
	people: [],
	next: null,
	error: ''
};

const peopleReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PEOPLE:
			return {
				...state,
				loading: true
			};
		case FETCH_PEOPLE_SUCCESS:
			return {
				...state,
				loading: false,
				people: state.people.concat(action.people),
				next: action.next,
				error: ''
			};
		case FETCH_PEOPLE_ERROR:
			return {
				...state,
				loading: false,
				people: state.people,
				error: action.error
			};
		default:
			return state;
	}
};

export default peopleReducer;
