import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTab } from '../redux';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</Typography>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		padding: 0,
		width: '100%'
	}
}));

export const TabRouter = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	const value = useSelector((state) => state.navigation.activeTab);
	const selected = useSelector((state) => state.navigation.selected);
	const dispatch = useDispatch();

	return (
		<div className={classes.root}>
			<AppBar position="static" color="default">
				<Tabs
					value={value}
					onChange={(e, tab) => dispatch(changeTab(tab))}
					indicatorColor="primary"
					textColor="primary"
					variant="fullWidth"
					aria-label="full width tabs example"
				>
					<Tab label="Lista" {...a11yProps(0)} />
					<Tab disabled={!selected} label="Detalle" {...a11yProps(1)} />
				</Tabs>
			</AppBar>
			<SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={value}>
				{props.children.map((page, index) => (
					<TabPanel key={index} value={value} index={index} dir={theme.direction}>
						{page}
					</TabPanel>
				))}
			</SwipeableViews>
		</div>
	);
};
