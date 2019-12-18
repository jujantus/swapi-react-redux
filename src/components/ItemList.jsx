import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPeople, getFilms, changeSelected, changeTab } from '../redux';
import InfiniteScroll from 'react-infinite-scroller';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper
	},
	filmList: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		height: '100%'
	}
}));

export const ItemList = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const people = useSelector((state) => state.people.people);
	const films = useSelector((state) => state.films.films);
	const currentView = useSelector((state) => state.navigation.currentView);
	const peopleSearch = useSelector((state) => state.people.searchResults);
	const selectedFilms = useSelector((state) => state.films.selectedFilms);
	const next = useSelector((state) => state.people.next);

	useEffect(
		() => {
			if (currentView === 'films' && !films.length) {
				dispatch(getFilms());
			} else if (currentView === 'people' && !people.length) {
				dispatch(getPeople());
			}
		},
		[ currentView ]
	);

	const renderPeople = (data) => {
		return data.map((character, index) => (
			<React.Fragment key={character.url}>
				<ListItem
					button
					onClick={() => {
						dispatch(changeSelected('people', character));
						dispatch(changeTab(1));
					}}
				>
					<ListItemText primary={character.name} />
				</ListItem>
				{index !== people.length - 1 && <Divider />}
			</React.Fragment>
		));
	};

	const renderFilms = (data) => (
		<div className={classes.filmList}>
			{data.map((film, index) => (
				<React.Fragment key={film.episode_id}>
					<ListItem
						button
						onClick={() => {
							dispatch(changeSelected('films', film));
							dispatch(changeTab(1));
						}}
					>
						<ListItemText primary={film.title} />
					</ListItem>
					{index !== films.length - 1 && <Divider />}
				</React.Fragment>
			))}
		</div>
	);

	return (
		<React.Fragment>
			{currentView === 'people' && (
				<InfiniteScroll loadMore={() => dispatch(getPeople('', next))} hasMore={!!next && !peopleSearch}>
					{peopleSearch ? renderPeople(peopleSearch) : renderPeople(people)}
				</InfiniteScroll>
			)}
			{currentView === 'films' && (selectedFilms ? renderFilms(selectedFilms) : renderFilms(films))}
		</React.Fragment>
	);
};
