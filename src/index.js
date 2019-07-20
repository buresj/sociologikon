import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer(), composeWithDevTools());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
