import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeView, changeTab } from '../../redux';

import clsx from 'clsx';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';

import {
	Drawer,
	AppBar,
	Toolbar,
	CssBaseline,
	Typography,
	Divider,
	ListItem,
	ListItemIcon,
	ListItemText,
	IconButton,
	InputBase
} from '@material-ui/core';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import TheatersIcon from '@material-ui/icons/Theaters';
import FaceIcon from '@material-ui/icons/Face';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		height: theme.mixins.toolbar.minHeight
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: '100%'
	},
	menuButton: {
		marginRight: 36
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		justifyContent: 'space-evenly'
	},
	drawerOpen: {
		width: drawerWidth,
		justifyContent: 'space-evenly',
		marginTop: theme.mixins.toolbar.minHeight,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerClose: {
		marginTop: theme.mixins.toolbar.minHeight,
		justifyContent: 'space-evenly',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1
		}
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(0),
		marginTop: theme.mixins.toolbar.minHeight,
		overflowY: 'scroll'
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto'
		}
	},
	searchIcon: {
		width: theme.spacing(7),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRoot: {
		color: 'inherit'
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: 120,
			'&:focus': {
				width: 200
			}
		}
	}
}));

const Navbar = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	const dispatch = useDispatch();
	const [ open, setOpen ] = useState(false);
	console.log(theme);
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={() => setOpen(!open)}
						edge="start"
						className={classes.menuButton}
					>
						{open ? <ChevronLeftIcon /> : <MenuIcon />}
					</IconButton>

					<Typography variant="h6" noWrap>
						Star Wars
					</Typography>

					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open
					})
				}}
				open={open}
			>
				<ListItem
					button
					onClick={() => {
						dispatch(changeView('films'));
						dispatch(changeTab(0));
					}}
					key={'Películas'}
				>
					<ListItemIcon>
						<TheatersIcon />
					</ListItemIcon>
					<ListItemText primary={'Películas'} />
				</ListItem>
				<Divider />
				<ListItem
					button
					onClick={() => {
						dispatch(changeView('people'));
						dispatch(changeTab(0));
					}}
					key={'Personajes'}
				>
					<ListItemIcon>
						<FaceIcon />
					</ListItemIcon>
					<ListItemText primary={'Personajes'} />
				</ListItem>
			</Drawer>
			<main className={classes.content}>{props.children}</main>
		</div>
	);
};

export default Navbar;
