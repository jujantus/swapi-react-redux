import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { translate } from '../utils';
import { changeSelected } from '../redux';
import clsx from 'clsx';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	card: {
		display: 'flex',
		justifyContent: 'space-between',
		height: '90%'
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		flex: '1 0 auto'
	},

	controls: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1)
	},
	poster: {
		height: '30vh',
		objectFit: 'contain'
	},
	movieTitle: {
		width: '40%'
	}
}));

const matchFilm = (films, match) => {
	return films.filter((film) => film.url === match)[0];
};

export const ItemCard = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	const selected = useSelector((state) => state.navigation.selected);
	const selectedType = useSelector((state) => state.navigation.selectedType);
	const films = useSelector((state) => state.films.films);
	const dispatch = useDispatch();

	const renderPeople = () => (
		<Card className={classes.card}>
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Typography component="h5" variant="h5">
						Nombre - {selected.name}
					</Typography>
					<Typography variant="subtitle1" color="textSecondary">
						Color de ojos - {translate(selected.eye_color)}
					</Typography>
					<Typography variant="subtitle1" color="textSecondary">
						Altura - {selected.height} cm
					</Typography>
					<Typography variant="subtitle1" color="textSecondary">
						Peso - {selected.mass} kg
					</Typography>
					<Typography variant="subtitle1" color="textSecondary">
						Películas en las que apareció:
						<ul>
							{selected.films.map((film) => (
								<li
									key={film}
									onClick={() => dispatch(changeSelected('films', matchFilm(films, film)))}
								>
									{matchFilm(films, film).title}
								</li>
							))}
						</ul>
					</Typography>
				</CardContent>
			</div>
			<CardMedia
				className={classes.cover}
				image="/static/images/cards/live-from-space.jpg"
				title="Live from space album cover"
			/>
		</Card>
	);

	const renderFilms = () => {
		let fecha = selected.release_date.split('-');
		fecha = `${fecha[2]}/${fecha[1]}/${fecha[0]}`;
		const extraClasses = props.extraClasses || [];
		return (
			<Card className={clsx(classes.card, ...extraClasses)}>
				<CardContent className={classes.content}>
					<Typography className={classes.movieTitle} component="h5" variant="h5">
						Título - {selected.title}
					</Typography>
					<Typography variant="subtitle1" color="textSecondary">
						Director - {selected.director}
					</Typography>
					<Typography variant="subtitle1" color="textSecondary">
						Productor - {selected.producer}
					</Typography>
					<Typography variant="subtitle1" color="textSecondary">
						Fecha de estreno - {fecha}
					</Typography>
				</CardContent>
				<img
					className={classes.poster}
					src={require(`../assets/images/${selected.episode_id}.jpg`)}
					alt={selected.title}
				/>
			</Card>
		);
	};

	return (
		<React.Fragment>
			{selectedType === 'films' && renderFilms()}
			{selectedType === 'people' && renderPeople()}
		</React.Fragment>
	);
};
