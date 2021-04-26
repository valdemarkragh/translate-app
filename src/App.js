import { AuthProvider } from "./context/AuthContext";

import { StartupLogin } from "./components/Startup/StartupLogin";
import { StartupRegister } from "./components/Startup/StartupRegister";
import { Translation } from "./components/Translation/Translation";
import { Profile } from "./components/Profile/Profile";
import { Header } from "./components/Header/Header";
import { PrivateRoute } from "./util/PrivateRoute";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Container fluid className='main'>
            <AuthProvider>
                <Router>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={StartupLogin} />
                        <Route
                            path='/register'
                            exact
                            component={StartupRegister}
                        />
                        <PrivateRoute
                            path='/translation'
                            component={Translation}
                        />
                        <PrivateRoute path='/profile' component={Profile} />
                    </Switch>
                </Router>
            </AuthProvider>
        </Container>
    );
}

export default App;
