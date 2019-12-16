import axios from 'axios';

const BASEURL = 'https://swapi.co/api/';

const getFilms = (film = '') => {
	axios
		.get(BASEURL + 'films/' + film)
		.then((res) => {
			console.log('SUCCESS! => ', res.data);
			return { success: true, data: res.data };
		})
		.catch((err) => {
			console.error('FAILURE! => ', err);
			return { success: false, error: err };
		});
};

const getPeople = (person = '') => {
	axios
		.get(BASEURL + 'people/' + person)
		.then((res) => {
			console.log('SUCCESS! => ', res.data);
			return { success: true, data: res.data };
		})
		.catch((err) => {
			console.error('FAILURE! => ', err);
			return { success: false, error: err };
		});
};

export { getFilms, getPeople };
