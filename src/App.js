import React from 'react';
import Navbar from './components/layout/Navbar';
import TabRouter from './components/layout/TabRouter';
import ItemList from './components/ItemList';
import ItemCard from './components/ItemCard';

const App = () => {
	return (
		<Navbar>
			<TabRouter>
				<ItemList />
				<ItemCard />
			</TabRouter>
		</Navbar>
	);
};

export default App;
