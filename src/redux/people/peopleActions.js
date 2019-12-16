import axios from 'axios';
import { FETCH_PEOPLE, FETCH_PEOPLE_SUCCESS, FETCH_PEOPLE_ERROR } from './peopleTypes';

const fetchPeople = () => {
	return {
		type: FETCH_PEOPLE
	};
};

const fetchPeopleSuccess = (people, next) => {
	return {
		type: FETCH_PEOPLE_SUCCESS,
		people: people,
		next: next
	};
};

const fetchPeopleError = (error) => {
	return {
		type: FETCH_PEOPLE_ERROR,
		error: error
	};
};

export const getPeople = (person = '', url = null) => {
	return (dispatch) => {
		dispatch(fetchPeople);
		axios
			.get(url || 'https://swapi.co/api/people/' + person)
			.then((res) => {
				const people = res.data.results;
				const next = res.data.next;
				dispatch(fetchPeopleSuccess(people, next));
			})
			.catch((err) => {
				const error = err.message;
				dispatch(fetchPeopleError(error));
			});
	};
};
