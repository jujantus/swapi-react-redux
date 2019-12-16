import { CHANGE_VIEW, CHANGE_SELECTED, CHANGE_TAB } from './navTypes';

export const changeView = (view) => {
	return {
		type: CHANGE_VIEW,
		view: view
	};
};

export const changeSelected = (selectedType, selected) => {
	return {
		type: CHANGE_SELECTED,
		selectedType: selectedType,
		selected: selected
	};
};

export const changeTab = (tab) => {
	return {
		type: CHANGE_TAB,
		tab: tab
	};
};
