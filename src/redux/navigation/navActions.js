import { CHANGE_VIEW } from './navTypes';

export const changeView = (view) => {
	return {
		type: CHANGE_VIEW,
		view: view
	};
};
