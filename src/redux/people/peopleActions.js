import axios from 'axios';
import { FETCH_PEOPLE, FETCH_PEOPLE_SUCCESS, FETCH_PEOPLE_ERROR, FETCH_PERSON_SUCCESS } from './peopleTypes';

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

export const fetchPersonSuccess = (results) => {
	return {
		type: FETCH_PERSON_SUCCESS,
		results: results
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
		dispatch(fetchPeople());
		axios
			.get(url || 'https://swapi.co/api/people/')
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

export const getPerson = (person) => {
	return (dispatch) => {
		dispatch(fetchPeople());
		axios
			.get('https://swapi.co/api/people/?search=' + person)
			.then((res) => {
				const results = res.data.results;

				dispatch(fetchPersonSuccess(results));
			})
			.catch((err) => {
				const error = err.message;
				dispatch(fetchPeopleError(error));
			});
	};
};
