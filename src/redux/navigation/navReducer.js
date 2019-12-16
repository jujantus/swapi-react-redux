import { CHANGE_VIEW } from './navTypes';

const initialState = {
	currentView: 'films'
};

const navReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_VIEW:
			return {
				...state,
				currentView: action.view
			};
		default:
			return state;
	}
};

export default navReducer;
