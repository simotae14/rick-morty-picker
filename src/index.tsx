import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App';
import { StoreProvider } from './store/Store';

const root = document.getElementById('app-root');

ReactDOM.render(<StoreProvider><App /></StoreProvider>, root);