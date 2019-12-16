import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { translate } from '../utils';
import { changeSelected } from '../redux';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	card: {
		display: 'flex'
	},
	details: {
		display: 'flex',
		flexDirection: 'column'
	},
	content: {
		flex: '1 0 auto'
	},
	cover: {
		width: 151
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1)
	}
}));

const matchFilm = (films, match) => {
	return films.filter((film) => film.url === match)[0];
};

const ItemCard = () => {
	const classes = useStyles();
	const theme = useTheme();
	const selected = useSelector((state) => state.navigation.selected);
	const selectedType = useSelector((state) => state.navigation.selectedType);
	const films = useSelector((state) => state.films.films);
	const dispatch = useDispatch();

	return (
		<React.Fragment>
			{selectedType === 'films' && (
				<Card className={classes.card}>
					<div className={classes.details}>
						<CardContent className={classes.content}>
							<Typography component="h5" variant="h5">
								Título - {selected.title}
							</Typography>
							<Typography variant="subtitle1" color="textSecondary">
								Director - {selected.director}
							</Typography>
						</CardContent>
					</div>
					<CardMedia
						className={classes.cover}
						image="/static/images/cards/live-from-space.jpg"
						title="Live from space album cover"
					/>
				</Card>
			)}
			{selectedType === 'people' && (
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
										<li onClick={() => dispatch(changeSelected('films', matchFilm(films, film)))}>
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
			)}
		</React.Fragment>
	);
};

export default ItemCard;
