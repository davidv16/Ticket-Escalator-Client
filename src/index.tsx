import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import './styles/index.scss';
import store from './store';
// import { store } from './store/store';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
	<React.StrictMode>
		<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
		</Provider>
	</React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
