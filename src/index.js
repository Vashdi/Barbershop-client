import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AuthReducer from './Components/Redux/AuthReducer';
import AppointmentReducer from './Components/Redux/appointmentReducer';
import { combineReducers } from 'redux'


const appStore = createStore(combineReducers({
    AuthReducer,
    AppointmentReducer
})
);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={appStore}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

serviceWorker.unregister();