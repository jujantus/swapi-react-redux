import React from 'react';
import Navbar from './components/layout/Navbar';
import TabRouter from './components/layout/TabRouter';
import CharacterList from './components/CharacterList';

const App = () => {
	return (
		<Navbar>
			<TabRouter>
				<CharacterList />
				<h1>CULO</h1>
			</TabRouter>
		</Navbar>
	);
};

export default App;
