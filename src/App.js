import './App.css';
import { Link, Switch, Route } from 'react-router-dom';

//layouts
import LandingPageLayout from './layouts/LandingPage';

//pages
import HomePage from './pages/HomePage';

function App() {
	return (
		<Switch>
			<Route path="/">
				<LandingPageLayout heading="Flowers in a Can">
					<HomePage />
				</LandingPageLayout>
			</Route>
		</Switch>
	);
}

export default App;
