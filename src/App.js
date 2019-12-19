import React from 'react';
import { Navbar, TabRouter, ItemList, ItemCard } from './components';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
	item: {
		width: '50%',
		height: '100%',
		overflow: 'auto',
		borderRight: '1px solid #DEDEDE'
	},
	fixed: {
		right: 0
	}
}));
const App = () => {
	const classes = useStyles();
	const medium = useMediaQuery('(min-width:600px)');

	const renderMobileBody = () => (
		<React.Fragment>
			<TabRouter>
				<ItemList />
				<ItemCard />
			</TabRouter>
		</React.Fragment>
	);

	const renderMediumBody = () => (
		<React.Fragment>
			<div className={classes.item}>
				<ItemList />
			</div>
			<ItemCard extraClasses={[ classes.item, classes.fixed ]} />
		</React.Fragment>
	);

	return <Navbar>{medium ? renderMediumBody() : renderMobileBody()}</Navbar>;
};

export default App;
