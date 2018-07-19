import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import App from './components/App';
import configureStore from './configureStore';
import 'semantic-ui-css/semantic.min.css';
import './styles.css';

// base api url 
axios.defaults.baseURL = 'https://avetiq-test.firebaseapp.com/todos/group/g1531943374269/user/u1531943374268';

// create redux store
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
