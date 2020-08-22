import React from 'react';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Player from '../containers/Player';
import Layaout from '../components/Layaout';

const App = () => (
    <BrowserRouter>
        <Layaout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/player/:id" component={Player} />
            <Route component={NotFound}/>
        </Switch>
        </Layaout>
    </BrowserRouter>
);

export default App;