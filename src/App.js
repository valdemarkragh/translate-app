import { AuthProvider } from './context/AuthContext';

import { Home } from './components/Home/Home';
import { HomeRegister } from './components/Home/HomeRegister';
import { Translation } from './components/Translation/Translation';
import { Profile } from './components/Profile/Profile';
import { Header } from './components/Global/Header/Header';
import { ProtectedRoute } from './util/ProtectedRoute';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Container fluid className="main">
			<AuthProvider>
				<Router>
					<Header />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/register" exact component={HomeRegister} />
						<ProtectedRoute path="/translate" component={Translation} />
						<ProtectedRoute path="/profile" component={Profile} />
					</Switch>
				</Router>
			</AuthProvider>
		</Container>
	);
}

export default App;
