import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPeople, getFilms } from '../redux';
import InfiniteScroll from 'react-infinite-scroller';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper
	}
}));

const CharacterList = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const people = useSelector((state) => state.people.people);
	const films = useSelector((state) => state.films.films);
	const currentView = useSelector((state) => state.navigation.currentView);
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

	return (
		<React.Fragment>
			{currentView === 'people' && (
				<InfiniteScroll loadMore={() => dispatch(getPeople('', next))} hasMore={!!next}>
					{people.map((character, index) => (
						<React.Fragment key={character.url}>
							<ListItem button>
								<ListItemText primary={character.name} />
							</ListItem>
							{index !== people.length - 1 && <Divider />}
						</React.Fragment>
					))}
				</InfiniteScroll>
			)}
			{currentView === 'films' &&
				films.map((film, index) => (
					<React.Fragment key={film.episode_id}>
						<ListItem button>
							<ListItemText primary={film.title} />
						</ListItem>
						{index !== films.length - 1 && <Divider />}
					</React.Fragment>
				))}
		</React.Fragment>
	);
};

export default CharacterList;
