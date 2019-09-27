'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerMiddleware, connectRouter, ConnectedRouter } from 'connected-react-router';
import { breadCrumbReducer, breadCrumbMiddleware } from 'react-router-redux-breadcrumbs';
import breadCrumbs from './config/bread_crumbs';

import Home from './pages/home/home';
import BasePacks from './pages/packages/basePacks';
import BasePackDetail from './pages/packages/basePackDetail';
import PatchList from './pages/packages/pactchPacks';

import './index.css';

const appReducer = (history) => combineReducers({
    router: connectRouter(history),
    breadCrumbReducer,
});

const history = createBrowserHistory();
const store = createStore(
    appReducer(history),
    {},
    compose(applyMiddleware(routerMiddleware(history), breadCrumbMiddleware(breadCrumbs)))
);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/basePacks" component={BasePacks}></Route>
                <Route exact path="/basePacks/:packId" component={BasePackDetail}></Route>
                <Route exact path="/basePacks/:packId/patchList" component={PatchList}></Route>
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
