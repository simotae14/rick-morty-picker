import React from 'react'
import ReactDOM from 'react-dom'
import { Router, RouteComponentProps } from '@reach/router';

import './index.css';
import App from './components/App';
import { StoreProvider } from './store/Store';
import HomePage from './pages/HomePage';
import FavPage from './pages/FavPage';

const root = document.getElementById('app-root');

const RouterPage = (
    props: {
        pageComponent: JSX.Element
    } & RouteComponentProps
) => props.pageComponent;

ReactDOM.render(
    <StoreProvider>
        <Router>
            <App path="/">
                <RouterPage pageComponent={<HomePage />} path="/" />
                <RouterPage pageComponent={<FavPage />} path="/faves" />
            </App>
        </Router>
    </StoreProvider>,
    root
);