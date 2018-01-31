import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// import App from 'src/App';
import App from './components/app';
import reducers from './reducers';
// import '../style/style.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>
	, document.querySelector('.container'));
// 2nd argument represents where to output the content to.
// the store will contain the data, passed onto the child componet
// (app), and all of it is rendered within .container in index.html