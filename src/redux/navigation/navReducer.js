import { CHANGE_VIEW, CHANGE_SELECTED, CHANGE_TAB } from './navTypes';

const initialState = {
	currentView: 'films',
	activeTab: 0,
	selectedType: '',
	selected: {}
};

const navReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_VIEW:
			return {
				...state,
				currentView: action.view
			};
		case CHANGE_SELECTED:
			return {
				...state,
				selectedType: action.selectedType,
				selected: action.selected
			};
		case CHANGE_TAB:
			return {
				...state,
				activeTab: action.tab
			};
		default:
			return state;
	}
};

export default navReducer;
