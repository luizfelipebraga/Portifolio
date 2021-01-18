import React from 'react';
import { BrowserRouter, Route, Redirect, Switch, useHistory } from 'react-router-dom';
import Contato from './pages/Contato';
import Curriculo from './pages/Curriculo';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import QuemSouEu from './pages/QuemSouEu';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/quem-sou-eu" component={QuemSouEu} />
                <Route path="/curriculo" component={Curriculo} />
                <Route path="/contato" component={Contato} />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;