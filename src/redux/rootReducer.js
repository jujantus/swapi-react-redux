import { combineReducers } from 'redux';
import peopleReducer from './people/peopleReducer';
import filmsReducer from './films/filmsReducer';
import navReducer from './navigation/navReducer';

const rootReducer = combineReducers({
	navigation: navReducer,
	films: filmsReducer,
	people: peopleReducer
});

export default rootReducer;
