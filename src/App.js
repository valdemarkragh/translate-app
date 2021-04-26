import { Startup } from './components/Startup/Startup';
import { Translation } from './components/Translation/Translation';
import { Profile } from './components/Profile/Profile';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Container className="main d-flex justify-content-center align-items-center">
			<Router>
				<Switch>
					<Route path="/" exact component={Startup} />
					<Route path="/translation" component={Translation} />
					<Route path="/profile" component={Profile} />
				</Switch>
			</Router>
		</Container>
	);
}

export default App;
